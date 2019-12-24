import React, {useState} from 'react';
import './../../../css/default.css';
import {Link} from 'react-router-dom';

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
    camisas: 'camisas',
    ropaInterior: 'ropaInterior'
}

const Filtros = ({setCategories, list, setIsActive, isActive, setIsActive2, isActive2}) => {
    //States checkbox de marcas
    const [brandAdidas, setBrandAdidas] = useState(false);
    const [brandNike, setBrandNike] = useState(false);
    const [brandTaverniti, setBrandTaverniti] = useState(false);
    const [brandLacoste, setBrandLacoste] = useState(false);

    //States checkbox de colores
    const [colorBlanco, setColorBlanco] = useState(false);
    const [colorAzul, setColorAzul] = useState(false);
    const [colorVerde, setColorVerde] = useState(false);
    const [colorAmarillo, setColorAmarillo] = useState(false);
    const [colorRojo, setColorRojo] = useState(false);

    //Obtenemos cantidades
    const {listAll, listMen, listWomen, listUni, listNike, listLacoste, listAdidas, listTaverniti} = list;
    //obtenemos estados de activacion 
    const {isActiveF, isActiveM, isActiveT, isActiveU} = isActive;
    const {isActiveRemera, isActivePantalon, isActivePollera, isActiveRopaInterior, isActiveAbrigos,
           isActiveAccesorios, isActiveCalzado, isActiveCamisas} = isActive2;
    
    //Metodos para activacion categórica
    const handleClick = (categoria) => {
        const {masculino, femenino, todos, unisex} = GENEROS;
        switch (categoria) {
            case masculino:
                setIsActive({isActiveM: true, isActiveF: false, isActiveT: false, isActiveU: false});
                setCategories(categoria);
                break;
            case femenino:
                setIsActive({isActiveM: false, isActiveF: true, isActiveT: false, isActiveU: false});
                setCategories(categoria);
                break;
            case unisex:
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: true});
                setCategories(categoria);
                break;
            case todos:
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: true, isActiveU: false});
                setCategories(categoria);
                break;
        }
    }

    const handleClick2 = (categoria) => {
        const {accesorios, abrigos, calzado, camisas, remeras, ropaInterior, pantalones, pollera} = CATEGORIAS;
        switch (categoria) {
            case abrigos:
                setIsActive2({isActiveAbrigos: true, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case accesorios:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: true, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case calzado:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: true, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case camisas:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: true,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case remeras:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: true, isActiveRopaInterior: false});
                break;
            case ropaInterior:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: true});
                break;
            case pantalones:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: true, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case pollera:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: true, isActiveRemera: false, isActiveRopaInterior: false});
                break;
        }
    }

    //Métodos de limpieza
    const handleLimpiarMarcas = (e) => {
        e.preventDefault();
        setBrandAdidas(false);
        setBrandLacoste(false);
        setBrandNike(false);
        setBrandTaverniti(false);
    };

    const handleLimpiarColores = (e) => {
        e.preventDefault();
        setColorBlanco(false);
        setColorAzul(false);
        setColorVerde(false);
        setColorAmarillo(false);
        setColorRojo(false);
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
                            onClick={() => handleClick2(CATEGORIAS.camisas)}
                            className={`nav-link ${(isActiveCamisas) ? 'active' : null}`}
                            >Camisas </Link>
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
                    </ul>
                </ul>
            </div>
            <div className="panel panel-default sidebar-menu">
                <div className="panel-heading d-flex align-items-center justify-content-between">
                    <h3 className="h4 panel-title">Marcas</h3>
                    <div onClick={(e) => handleLimpiarMarcas(e)} className="btn btn-sm btn-danger">
                        <i className="fa fa-times-circle"></i>
                        <span className="d-none d-md-inline-block">Limpiar</span>
                    </div>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <div className="checkbox">
                                <label>
                                    <input 
                                    type="checkbox" 
                                    checked={brandAdidas}
                                    onChange={() => setBrandAdidas(!brandAdidas)}
                                    /> 
                                    Adidas  ({listAdidas})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input 
                                    type="checkbox"
                                    checked={brandLacoste}
                                    onChange={() => setBrandLacoste(!brandLacoste)}
                                    /> 
                                    Lacoste  ({listLacoste})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input 
                                    type="checkbox"
                                    checked={brandNike}
                                    onChange={() => setBrandNike(!brandNike)}
                                    /> 
                                    Nike  ({listNike})
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input 
                                    type="checkbox"
                                    checked={brandTaverniti}
                                    onChange={() => setBrandTaverniti(!brandTaverniti)}
                                    /> 
                                    Taverniti  ({listTaverniti})
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
                    <div onClick={ (e) => handleLimpiarColores(e) } className="btn btn-sm btn-danger">
                        <i className="fa fa-times-circle"></i>
                        <span className="d-none d-md-inline-block">Limpiar</span>
                    </div>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <div className="checkbox">
                                <label>
                                <input 
                                type="checkbox"
                                checked={colorBlanco}
                                onChange={() => setColorBlanco(!colorBlanco)}
                                />
                                <span className="colour white"></span> Blanco (14)
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input 
                                type="checkbox"
                                checked={colorAzul}
                                onChange={() => setColorAzul(!colorAzul)}
                                />
                                <span className="colour blue"></span> Azul (10)
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input 
                                type="checkbox"
                                checked={colorVerde}
                                onChange={() => setColorVerde(!colorVerde)}
                                />
                                <span className="colour green"></span> Verde (20)
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input 
                                type="checkbox"
                                checked={colorAmarillo}
                                onChange={() => setColorAmarillo(!colorAmarillo)}
                                />
                                <span className="colour yellow"></span> Amarillo (13)
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                <input 
                                type="checkbox"
                                checked={colorRojo}
                                onChange={() => setColorRojo(!colorRojo)}
                                />
                                <span className="colour red"></span> Rojo (10)
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
