import React, {useState, useEffect} from 'react';
import './../../../css/default.css';
import {Link} from 'react-router-dom';
import {selectGenre, selectCategorie, selectPrice, colorsLogic, showListLogic} from './utils/filterFunctions';
//Constantes de categorías
const GENEROS = {
    masculino: 'M',
    femenino: 'F',
    unisex: 'U',
    todos: 'all'
};

const CATEGORIAS = {
    accesorios: 'accesorios',
    abrigos: 'abrigos',
    calzado: 'calzado',
    remeras: 'remeras',
    pantalones: 'pantalones',
    pollera: 'pollera',
    ropaInterior: 'ropaInterior',
    medias: 'medias',
    trajes: 'trajes',
    trajesBaño: 'trajesBaño',
    blusa: 'blusa',
    vestido: 'vestido',
    calzas: 'calzas'
}

const Filtros = ({setCategories, list, setIsActive, isActive, setIsActive2, isActive2, lista, setCopyList, colors}) => {
    //States inputs del precio 
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');
    
    //States radios de colores
    const [colorBlanco, setColorBlanco] = useState(false);
    const [colorAzul, setColorAzul] = useState(false);
    const [colorVerde, setColorVerde] = useState(false);
    const [colorAmarillo, setColorAmarillo] = useState(false);
    const [colorRojo, setColorRojo] = useState(false);
    const [colorMarron, setColorMarron] = useState(false);
    const [colorNegro, setColorNegro] = useState(false);
    const [colorCeleste, setColorCeleste] = useState(false);
    const [colorGris, setColorGris] = useState(false);
    const [colorRosado, setColorRosado] = useState(false);
    const [colorPurpura, setColorPurpura] = useState(false);
    const [colorNaranja, setColorNaranja ] = useState(false);
    const [colorMagenta, setColorMagenta ] = useState(false);
    //Obtenemos cantidades
    const {listAll, listMen, listWomen, listUni} = list;
    //obtenemos estados de activacion 
    const {isActiveF, isActiveM, isActiveT, isActiveU} = isActive;
    const {isActiveRemera, isActivePantalon, isActivePollera, isActiveRopaInterior, isActiveAbrigos,
           isActiveAccesorios, isActiveCalzado, isActiveMedias, isActiveTrajes, isActiveTrajesBaño, isActiveBlusa, isActiveVestido, isActiveCalza} = isActive2;
    

    //Metodos para activacion categórica
    const handleClick = (categoria) => {
        selectGenre(GENEROS, categoria, setIsActive, setCategories, setIsActive2, setCopyList, lista);
       
    }

    const handleClick2 = (categoria) => {
        selectCategorie(CATEGORIAS, categoria, setIsActive2, setIsActive);

    }

    //Métodos de limpieza
    const handleLimpiarPrecio = (e) => {
        e.preventDefault();
        setPriceMin('');
        setPriceMax('');
    };
    
   const activarColor = (color) => {
    colorsLogic(color, setColorNaranja, setColorAmarillo, setColorBlanco, setColorMagenta, setColorVerde, setColorAzul, setColorRojo, setColorPurpura,
        setColorMarron, setColorNegro, setColorCeleste, setColorGris, setColorRosado);
   };
   
   const handleSearchColor = (e) => {
       e.preventDefault();
       showListLogic(setCopyList, lista, colorNaranja, colorAmarillo, colorBlanco, colorMagenta, colorVerde, colorAzul, colorRojo, colorPurpura,
        colorMarron, colorNegro, colorCeleste, colorGris, colorRosado);
   }

   const handlePrice = (e) => {
        e.preventDefault();
        selectPrice(setIsActive2, setIsActive);
        if (priceMin === '' || priceMax === '' || isNaN(priceMin) || isNaN(priceMax) ) {
            return;
        }else{
            //En caso de que el mínimo fuera máximo
            if (parseInt(priceMin) > parseInt(priceMax)) {
                return;
            }
        }
        let listado = lista.filter(product => {
            //Verifica que haya un descuento para comparar el precio resultante de aplicarlo 
            if (product.discount > 0) {
                let precio = product.price-((product.discount*product.price)/100);
                return  precio >= parseInt(priceMin) &&  precio <= parseInt(priceMax);
            }else {
                return product.price >= parseInt(priceMin) &&  product.price <= parseInt(priceMax);
            }
            
        });
        //Ordena la busqueda de menor a mayor
        setCopyList(listado);
    };

  
    return (
        
        <div className="col-md-3" style={{'padding-right': '35px'}}>
            {/* Menú y filtros */}
            <div className="panel panel-default sidebar-menu">
                <div className="panel-heading">
                    <h3 className="h4 panel-title">Género</h3>
                </div>
                <div className="panel-body">
                    <ul className="nav nav-pills flex-column text-sm category-menu">
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick(GENEROS.todos)} 
                            className={`nav-link ${(isActiveT) ? 'active' : null} d-flex align-items-center justify-content-between`}
                            >
                            <span>Todos</span>
                            <span className="badge badge-secondary">{listAll}</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick(GENEROS.masculino)} 
                            className={`nav-link ${(isActiveM) ? 'active' : null} d-flex align-items-center justify-content-between`}
                            >
                            <span>Hombres</span>
                            <span className="badge badge-secondary">{listMen}</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick(GENEROS.femenino)} 
                            className={`nav-link ${(isActiveF) ? 'active' : null} d-flex align-items-center justify-content-between`}
                            >
                            <span>Mujeres</span>
                            <span className="badge badge-secondary">{listWomen}</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick(GENEROS.unisex)} 
                            className={`nav-link ${(isActiveU) ? 'active' : null} d-flex align-items-center justify-content-between`}
                            >
                            <span>Unisex</span>
                            <span className="badge badge-secondary">{listUni}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="panel panel-default sidebar-menu">
                <div className="panel-heading">
                    <h3 className="h4 panel-title">Categorías</h3>
                </div>
                <ul 
                    className="nav nav-pills flex-column text-sm category-menu" 
                    style={{'max-height': '220px','overflow-y': 'scroll', 'overflow-x': 'hidden'}}
                >
                    <ul className="nav nav-pills flex-column" >
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.abrigos)}
                            className={`nav-link ${(isActiveAbrigos) ? 'active' : null}`}
                            >Abrigos </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.accesorios)}
                            className={`nav-link ${(isActiveAccesorios) ? 'active' : null}`}
                            >Accesorios </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.calzado)}
                            className={`nav-link ${(isActiveCalzado) ? 'active' : null}`}
                            >Calzado </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.pantalones)}
                            className={`nav-link ${(isActivePantalon) ? 'active' : null}`}
                            >Pantalones </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.pollera)}
                            className={`nav-link ${(isActivePollera) ? 'active' : null}`}
                            >Polleras </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.remeras)}
                            className={`nav-link ${(isActiveRemera) ? 'active' : null}`}
                            >Remeras </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.ropaInterior)}
                            className={`nav-link ${(isActiveRopaInterior) ? 'active' : null}`}
                            >Ropa interior </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.medias)}
                            className={`nav-link ${(isActiveMedias) ? 'active' : null}`}
                            >Medias </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.trajes)}
                            className={`nav-link ${(isActiveTrajes) ? 'active' : null}`}
                            >Trajes </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.trajesBaño)}
                            className={`nav-link ${(isActiveTrajesBaño) ? 'active' : null}`}
                            >Trajes de baño </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.blusa)}
                            className={`nav-link ${(isActiveBlusa) ? 'active' : null}`}
                            >Blusas </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.vestido)}
                            className={`nav-link ${(isActiveVestido) ? 'active' : null}`}
                            >Vestidos </Link>
                        </li>
                        <li className="nav-item">
                            <Link  
                            onClick={() => handleClick2(CATEGORIAS.calzas)}
                            className={`nav-link ${(isActiveCalza) ? 'active' : null}`}
                            >Calzas </Link>
                        </li>
                    </ul>
                </ul>
            </div>
            <div className="panel panel-default sidebar-menu">
                <div className="panel-heading d-flex align-items-center justify-content-between">
                    <h3 className="h4 panel-title">Precio</h3>
                    <div onClick={(e) => handleLimpiarPrecio(e)} className="btn btn-sm btn-danger">
                        <i className="fa fa-times-circle"></i>
                        <span className="d-none d-md-inline-block">Limpiar</span>
                    </div>
                </div>
                <div className="panel-body">
                    <form onSubmit={handlePrice}>
                        <div className="form-group">
                            <div className="checkbox">
                                <label>
                                    <input 
                                    style={{width: '95px', 'border-radius': '15px', border:'1px solid #a6abb0'}}
                                    type="text"
                                    onChange={(e) => setPriceMin(e.target.value)}
                                    value={priceMin}
                                    placeholder=" $ Mín."
                                    /> 
                                    
                                    <input
                                    style={{width: '95px', 'border-radius': '15px', border:'1px solid #a6abb0'}} 
                                    type="text"
                                    onChange={(e) => setPriceMax(e.target.value)}
                                    value={priceMax}
                                    placeholder=" $ Máx."
                                    />
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-sm btn-outlined" type="submit">
                            <i className="fa fa-pencil"></i> Aplicar
                        </button>
                    </form>
                </div>
            </div>
            <div className="panel panel-default sidebar-menu">
                <div className="panel-heading d-flex align-items-center justify-content-between">
                    <h3 className="h4 panel-title">Colores</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={handleSearchColor}>
                        <div className="form-group" style={{'max-height': '200px','overflow-y': 'scroll', 'overflow-x': 'hidden'}}>
                            <div className="checkbox" >
                                <label >
                                <input  style={{width:'20px'}}
                                type="radio"
                                checked={colorBlanco}
                                onChange={() => activarColor('blanco')}
                                />
                                <span className="colour white"></span> Blanco ({colors.white})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}} 
                                type="radio"
                                checked={colorAzul}
                                onChange={() => activarColor('azul')}
                                />
                                <span className="colour blue"></span> Azul ({colors.blue})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorVerde}
                                onChange={() => activarColor('verde')}
                                />
                                <span className="colour green"></span> Verde ({colors.green})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorAmarillo}
                                onChange={() => activarColor('amarillo')}
                                />
                                <span className="colour yellow"></span> Amarillo ({colors.yellow})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorRojo}
                                onChange={() => activarColor('rojo')}
                                />
                                <span className="colour red"></span> Rojo ({colors.red})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorPurpura}
                                onChange={() => activarColor('purpura')}
                                />
                                <span className="colour purple"></span> Púrpura ({colors.purple})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorNaranja}
                                onChange={() => activarColor('naranja')}
                                />
                                <span className="colour orange"></span> Naranja ({colors.orange})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorMagenta}
                                onChange={() => activarColor('magenta')}
                                />
                                <span className="colour magenta"></span> Magenta ({colors.magenta})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorMarron}
                                onChange={() => activarColor('marron')}
                                />
                                <span className="colour brown"></span> Marrón ({colors.brown})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorNegro}
                                onChange={() => activarColor('negro')}
                                />
                                <span className="colour black"></span> Negro ({colors.black})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorGris}
                                onChange={() => activarColor('gris')}
                                />
                                <span className="colour gray"></span> Gris ({colors.gray})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorRosado}
                                onChange={() => activarColor('rosado')}
                                />
                                <span className="colour pink"></span> Rosa ({colors.pink})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input style={{width:'20px'}}
                                type="radio"
                                checked={colorCeleste}
                                onChange={() => activarColor('celeste')}
                                />
                                <span className="colour lightBlue"></span> Celeste ({colors.lightBlue})
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-sm btn-outlined" type="submit">
                            <i className="fa fa-pencil"></i> Aplicar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Filtros;
