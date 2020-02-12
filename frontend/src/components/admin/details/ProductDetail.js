import React, {useState, useEffect, Fragment} from 'react'
import { getProductInfo, getProductColor_size } from '../../pages/shop/utils/shopFunctions';
import BreadCrumbs from '../../BreadCrumbs';
import Spinner from 'react-bootstrap/Spinner';
import Error from '../../messages/Error';
import ColorSizeList from '../list/colorSize/ColorSizeList';
import { EditColorSizeModal } from '../utils/modals';

export default function ProductDetail({props}) {
    const [product, setProduct] = useState({});
    const [colorSize, setColorSize] = useState([]);
    const [id] = useState(props.match.params.id);
    const [refresh, setRefresh] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
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


    const handleModalOpen = (item) => {
        if(item !== null) {
            setItemCS(item);
            setModalOpen(!modalOpen);
        }else {
            setModalOpen(!modalOpen);
            setItemCS(null);
        }
        
        setError(false);  
    };

    const editarCS = (color,talle,stock) => {

    }

    useEffect(() => {
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
            console.log(res);
            setColorSize(res);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }, []);

    return (
        <Fragment>
            <BreadCrumbs  name={`Detalles del producto #${id}`} isAdmin={true}/>
            {(loading) ? (
                <div className="col-md-12 text-center" style={{top:'40%',left:'5%', position:'absolute'}}> 
                    <Spinner animation="border" variant="dark" size="lg" role="status" />
                </div> 
            ): ( (error) ? (<Error texto="Ha ocurrido un error interno en el servidor" />) : 
            (
                <div>
                <form style={{marginLeft:'12rem'}}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <br/>
                            <h5 for="titulo">Título:</h5>
                            <input
                                id="titulo" type="text" className="form-control" 
                                style={{width:'80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                                onChange={(e) => setTitulo(e.target.value)}   
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
                        <div className="form-group">
                            <h5 for="material">Material:</h5>
                            <input
                                id="material" type="text" className="form-control" 
                                style={{width:'80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}}
                                onChange={(e) => setMaterial(e.target.value)} 
                                defaultValue={product.material}
                            />
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
                        <div class="form-check" style={{marginLeft:'-3.2rem'}}>
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
                        <div class="form-check" style={{marginLeft:'-3.2rem'}}>
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
                            <div className="col-md-6">
                                <br/><br/><br/><br/><br/><br/><br/>
                                <div className=" form-group"> 
                                    <button className="btn btn-success btn-lg" type="button"> Guardar cambios</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            
            <div className="row box">
                <div className="col-md-3">
                    <h1 className="text-muted m-0">Talles y colores</h1>
                    <div className=" form-group"> 
                        <hr/>
                        <button className="btn btn-primary" type="button">Nuevo talle y color</button> 
                    </div>
                </div>
                <div className="col-md-9">
                    <ColorSizeList list={colorSize} handleModalOpen={handleModalOpen} />
                </div>
            </div>
            <EditColorSizeModal 
            modalOpen={modalOpen}
            handleModalOpen={handleModalOpen}
            editarCS={editarCS}
            />
            </div>
            ))}
            
        </Fragment>
    )
}
