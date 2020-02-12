import React, {useState, useEffect, Fragment} from 'react'
import { getProductInfo, getProductColor_size } from '../../pages/shop/utils/shopFunctions';
import BreadCrumbs from '../../BreadCrumbs';
import Error from '../../messages/Error';
import ColorSizeList from '../list/colorSize/ColorSizeList';
import { EditColorSizeModal, AddColorSizeModal } from '../utils/modals';
import { modColor_Size, addColor_Size, modProduct, capitalize } from '../utils/adminFunctions';
import LoadingDark from '../../messages/LoadingDark';
import { validarProducto } from '../../../validacion/validate';

export default function ProductDetail({props}) {
    const [product, setProduct] = useState({});
    const [copyList, setCopyList] = useState([]);
    const [colorSize, setColorSize] = useState([]);
    const [id] = useState(props.match.params.id);
    const [refresh, setRefresh] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [error, setError] = useState(false);
    const [loading,setLoading] = useState (false);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [material, setMaterial] = useState('');
    const [marca, setMarca] = useState('');
    const [precio, setPrecio] = useState('');
    const [genero, setGenero] = useState({
        m: false,
        f: false,
        u: false,
        result: ''
    });
    const [descuento, setDescuento] = useState(0);
    const [itemCS, setItemCS] = useState(null);
    const [search, setSearch] = useState('');
    const [errorProduct, setErrorProduct] = useState({});

    const handleModalOpen = (item) => {
        if(item != null) {
            setItemCS(item);
            setModalOpen(!modalOpen); 
        }else{
            setItemCS(null);
            setModalOpen(!modalOpen);
        }
        setError(false);  
    };

    const handleModalOpen2 = () => {
        setModalOpen2(!modalOpen2);
        setError(false);  
    };

    const editarCS = (color,talle,stock) => {
        //console.log(color, talle, stock);
        //console.log(typeof(color), typeof(talle), typeof(stock));
        const color_size = {
            id: itemCS.id,
            color: color.toLowerCase(),
            size: talle,
            stock: parseInt(stock),
            prod_id: id
        }
        modColor_Size(color_size)
        .then(res => {
            setRefresh(true);
            console.log('éxito');
        })
        .catch(err => {
            console.log('error');
            setError(true);
            return;
        })
        setError(false);
    }

    const agregarCS = (color,talle,stock) => {
        //console.log(color, talle, stock);
        //console.log(typeof(color), typeof(talle), typeof(stock));
        const color_size = {
            color: color.toLowerCase(),
            size: talle,
            stock: parseInt(stock),
            prod_id: id
        }
        addColor_Size(color_size)
        .then(res => {
            setRefresh(true);
            console.log('éxito');
        })
        .catch(err => {
            console.log('error');
            setError(true);
            return;
        })
        setError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validarProducto(titulo, marca, material, precio, descuento);
        console.log(err); 
        if (err.obligatorio || err.natural || err.porc) {
            setErrorProduct(err);
            return;
        } else {
            const producto = {
                id: parseInt(id),
                name: capitalize(titulo),
                dsc: capitalize(descripcion),
                material: capitalize(material),
                genre: genero.result,
                brand: capitalize(marca),
                type: parseInt(product.type),
                discount:parseInt(descuento),
                price: parseFloat(precio)
            };
            modProduct(producto)
            .then(res => {
                console.log(res);
                setRefresh(true);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                return;
            })
        }
        setError(false);
        setErrorProduct({});
    }

    useEffect(() => {
        //setRefresh(false);
        setLoading(true);
        getProductInfo(id)
        .then(res => {
            console.log(res);
            setProduct(res);
            setTitulo(res.name);
            setDescripcion(res.dsc);
            setPrecio(res.price);
            setDescuento(res.discount);
            setMarca(res.brand);
            setMaterial(res.material);
            switch (res.genre) {
                case 'M':
                    setGenero({
                        m: true,
                        f: false,
                        u: false,
                        result: 'M'
                })
                break;
                case 'F':
                    setGenero({
                        m: false,
                        f: true,
                        u: false,
                        result: 'F'
                })
                break;
                case 'U':
                    setGenero({
                        m: false,
                        f: false,
                        u: true,
                        result: 'U'
                })
                break;
            }
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setLoading(true);
        getProductColor_size(id)
        .then(res => {
            //console.log(res);
            setColorSize(res);
            setCopyList(res);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }, [refresh]);

    //UseEffect de busqueda
    useEffect( () => {
        if(search !== '') {
            setCopyList(colorSize.filter(cs => {
              return (cs.color.toString().includes(search.toLowerCase()) || cs.size.toLowerCase().includes(search.toLowerCase()));
            }));
      }else{
       setCopyList(colorSize);
        }     
   },[search]);

    return (
        <Fragment>
            <BreadCrumbs  name={`Detalles del producto #${id}`} isAdmin={true}/>
            {(loading) ? (
                <LoadingDark/>
            ): ( (error) ? (<Error texto="Ha ocurrido un error interno en el servidor" />) : 
            (
                <div>
                <form style={{marginLeft:'12rem'}}>
                {errorProduct.obligatorio && <Error texto={errorProduct.obligatorio} />}
                {errorProduct.natural && <Error texto={errorProduct.natural} />}
                {errorProduct.porc && <Error texto={errorProduct.porc} />}
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <br/>
                            <h5 for="titulo">Nombre del producto:</h5>
                            <input
                                id="titulo" type="text" className="form-control" 
                                style={{width:'80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                                onChange={(e) =>  setTitulo(e.target.value)}   
                                defaultValue={product.name}
                            />
                        </div>
                        <div className="form-group">
                            <h5 for="reseña">Descripción:</h5>
                            <textarea 
                                id="reseña" className="form-control" cols="30" rows="9" 
                                style={{width: '80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif'}} 
                                defaultValue={product.dsc}
                                onChange={(e) => setDescripcion(e.target.value)} 
                                >
                            </textarea>
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <br/>
                        <h5 for="genero">Género:</h5>
                        <div id="genero" class="form-check" style={{marginLeft:'-3.2rem'}}>
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" 
                                name="M" checked={genero.m} 
                                onChange={(e) => 
                                    setGenero({
                                        m: true,
                                        f: false,
                                        u: false,
                                        result: e.target.name
                                })}
                                />
                                <p style={{marginLeft:'3.2rem'}}>Masculino</p>
                            </label>
                        </div>
                        <div class="form-check" style={{marginLeft:'-3.2rem', marginTop:'-0.9rem'}}>
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" 
                                name="F" checked={genero.f} 
                                onChange={(e) => 
                                    setGenero({
                                        m: false,
                                        f: true,
                                        u: false,
                                        result: e.target.name
                                })}
                                /> 
                                <p style={{marginLeft:'3.2rem'}}>Femenino</p>
                            </label>
                        </div>
                        <div class="form-check" style={{marginLeft:'-3.2rem', marginTop:'-0.9rem'}}>
                            <label class="form-check-label" >
                                <input type="radio" class="form-check-input" 
                                name="U" checked={genero.u} 
                                onChange={(e) => 
                                    setGenero({
                                        m: false,
                                        f: false,
                                        u: true,
                                        result: e.target.name
                                })}
                                /> 
                                <p style={{marginLeft:'3.2rem'}}>Unisex</p>
                            </label>
                        </div>
                        <div className="form-group">
                            <h5 for="marca">Marca:</h5>
                            <input
                                id="marca" type="text" className="form-control" 
                                style={{width:'80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}}
                                onChange={(e) => setMarca(e.target.value)} 
                                defaultValue={product.brand}
                            />
                        </div>
                        <div className="form-group">
                            <h5 for="material">Material:</h5>
                            <input
                                id="material" type="text" className="form-control" 
                                style={{width:'80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}}
                                onChange={(e) => setMaterial(e.target.value)} 
                                defaultValue={product.material}
                            />
                        </div>
                        <div className="form-group row inline-block">
                            <div className="col-md-5">
                            <div className="form-group">
                            <h5 for="precio">Precio unitario:</h5>
                                <input
                                    id="precio" type="number" 
                                    min="0" max="999999" className="form-control" 
                                    defaultValue={product.price}
                                    onChange={(e) => setPrecio(e.target.value)}
                                    style={{width:'50%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                                />
                            </div>
                            
                            </div>
                            <div className="col-md-7" style={{marginLeft:'-5rem'}}>
                            <h5 for="descuento">Descuento:</h5>
                            <input
                                id="descuento" type="number" 
                                min="0" max="100" className="form-control"
                                defaultValue={product.discount} 
                                onChange={(e) => setDescuento(e.target.value)}
                                style={{width:'30%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                            />
                            </div>
                            <div className="col-md-12 ">
                                <br/><br/>
                                <div className="form-group" style={{marginLeft:'-9.5rem'}}> 
                                    <div className="btn btn-success" type="button" onClick={handleSubmit}>Validar cambios</div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row ">
                <div className="col-md-4">
                    <h1 className="text-muted text-center">Talles y colores</h1>
                    <div className=" form-group text-center"> 
                        <hr style={{borderTop: '1px solid #8c8b8b',borderBottom: '1px solid #fff'}}/>
                        <div className="btn btn-danger" type="button" onClick={() => handleModalOpen2()}>Nuevo talle y color</div> 
                    </div>
                </div>
                <div className="col-md-8">
                    <ColorSizeList  handleModalOpen={handleModalOpen} copyList={copyList} setSearch={setSearch}/>
                </div>
            </div>
            <EditColorSizeModal 
            modalOpen={modalOpen}
            handleModalOpen={handleModalOpen}
            editarCS={editarCS}
            itemCS={itemCS}
            />
            <AddColorSizeModal 
            modalOpen={modalOpen2}
            handleModalOpen={handleModalOpen2}
            agregarCS={agregarCS}
            />
            </div>
            ))}
            
        </Fragment>
    )
}
