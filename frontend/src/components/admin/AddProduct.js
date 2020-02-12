import React, { Fragment, useState, useEffect } from 'react'
import BreadCrumbs from '../BreadCrumbs'
import { getTypes, capitalize, addProduct, addColor_Size } from './utils/adminFunctions';
import Error from '../messages/Error';
import { withRouter } from 'react-router-dom';
import LoadingDark from '../messages/LoadingDark';

function AddProduct({history}) {
    const [types, setTypes] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
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
    const [tipo, setTipo] = useState(null);
    const [talle, setTalle] = useState('');
    const [color, setColor] = useState('');
    const [stock, setStock] = useState('');
    const [descuento, setDescuento] = useState(0);


    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        getTypes()
        .then(res => {
            console.log(res)
            setTypes(res);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo || !descripcion || !stock || !material || !marca || !precio || !tipo || !talle || !color || genero.result === '') {
            setError(true);
            return;
        };
        const product = {
            name: titulo,
            dsc: descripcion,
            material,
            genre: genero.result,
            brand: marca,
            type: parseInt(tipo),
            discount:parseInt(descuento),
            price: parseFloat(precio)
        };

        addProduct(product)
        .then(res => {        
            const color_size = {
                color: color.toLowerCase(),
                size: talle,
                stock: parseInt(stock),
                prod_id: res
            };  
            addColor_Size(color_size)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    setError(true);
                    return;
                })
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
        
        history.push('/admin-page/products');

    }

    return (
        <Fragment >
            <BreadCrumbs name="Nuevo producto" isAdmin={true} />
            {(loading) ? (
                <LoadingDark/>
            ) : ( (error) ?
                (<Error texto="Hubo un error al recuperar los datos"/>
                )
                :
            (
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
                            />
                        </div>
                        <div className="form-group">
                            <h5 for="reseña">Descripción:</h5>
                            <textarea 
                                id="reseña" className="form-control" cols="30" rows="9" 
                                style={{width: '80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif'}} 
                                placeholder='(opcional)'
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
                            />
                        </div>
                        <div className="form-group">
                            <h5 for="marca">Marca:</h5>
                            <input
                                id="marca" type="text" className="form-control" 
                                style={{width:'80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}}
                                onChange={(e) => setMarca(e.target.value)} 
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
                        <div class="form-group">
                        <h5 for="tipo">Seleccione tipo:</h5>
                        <select className="form-control" id="tipo"
                        onChange={(e) => setTipo(e.target.value)}
                        style={{width:'50%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "pointer"}} >
                        >     
                        ))
                            {
                                types.map(type => (
                                <option
                                key={type.id}
                                value={type.id}>
                                  {capitalize(type.name)}
                                </option>))
                            }
                        </select>
                        </div>
                        <div class="form-group">
                        <h5 for="talle">Seleccione talle:</h5>
                        <select className="form-control" id="talle"
                        onChange={(e) => setTalle(e.target.value)}
                        style={{width:'50%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "pointer"}} >
                            <option selected disabled="disabled">Elige una opción</option>
                            <option>35</option>
                            <option>36</option>
                            <option>37</option>
                            <option>38</option>
                            <option>39</option>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                            <option>43</option>
                            <option>44</option>
                            <option>45</option>
                            <option>46</option>
                            <option>47</option>
                            <option>48</option>
                            <option>49</option>
                            <option>XXS</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                        </div>
                        <div class="form-group">
                            <h5 for="color">Seleccione color:</h5>
                            <select className="form-control" id="color"
                            onChange={(e) => setColor(e.target.value)}
                            style={{width:'50%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "pointer"}} >
                                <option selected disabled="disabled">Elige una opción</option>
                                <option>Azul</option>
                                <option>Verde</option>
                                <option>Rojo</option>
                                <option>Púrpura</option>
                                <option>Magenta</option>
                                <option>Amarillo</option>
                                <option>Marrón</option>
                                <option>Blanco</option>
                                <option>Negro</option>
                                <option>Celeste</option>
                                <option>Gris</option>
                                <option>Rosado</option>
                            </select>
                        </div>
                        <div className="form-group row inline-block">
                            <div className="col-md-5">
                            <div className="form-group">
                            <h5 for="precio">Precio unitario:</h5>
                                <input
                                    id="precio" type="number" 
                                    min="0" max="999999" className="form-control" 
                                    defaultValue="0"
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
                                defaultValue="0" 
                                onChange={(e) => setDescuento(e.target.value)}
                                style={{width:'30%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                            />
                            </div>
                        </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <h5 for="cantidad">Cantidad:</h5>
                            <input
                                id="cantidad" type="number" 
                                min="0" max="999999" className="form-control" 
                                defaultValue="1"
                                onChange={(e) => setStock(e.target.value)}
                                style={{width:'20%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                            />
                    </div>
                    <div className="col-md-5">
                        <br/>
                        <div className=" form-group"> 
                            <button className="btn btn-primary btn-lg" type="button" onClick={handleSubmit}> Cargar producto</button> 
                        </div>
                    </div>
                </div>
            </form>
            ))}
        </Fragment>
    )
}
export default withRouter(AddProduct);