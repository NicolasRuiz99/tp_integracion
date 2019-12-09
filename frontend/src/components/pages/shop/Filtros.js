import React from 'react';
import './../../../css/default.css';
import {Link} from 'react-router-dom';

const Filtros = () => {
    return (
        <div className="col-md-3">
            {/* Menú y filtros */}
            <div className="panel panel-default sidebar-menu">
                <div className="panel-heading">
                <h3 className="h4 panel-title">Categorías</h3>
                </div>
                <div className="panel-body">
                <ul className="nav nav-pills flex-column text-sm category-menu">
                    <li className="nav-item"><Link to="/shop-category" className="nav-link active d-flex align-items-center justify-content-between"><span>Hombres </span><span className="badge badge-secondary">42</span></Link>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item"><Link to="/shop-category" className="nav-link">Remeras</Link></li>
                        <li className="nav-item"><Link to="/shop-category" className="nav-link">Camisas</Link></li>
                        <li className="nav-item"><Link to="/shop-category" className="nav-link">Pantalones</Link></li>
                        <li className="nav-item"><Link to="/shop-category" className="nav-link">Accesorios</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item"><Link to="/shop-category" className="nav-link d-flex align-items-center justify-content-between"><span>Mujeres </span><span className="badge badge-light">123</span></Link>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item"><Link to="/shop-category" className="nav-link">Remeras</Link></li>
                        <li className="nav-item"><Link to="/shop-category" className="nav-link">Polleras</Link></li>
                        <li className="nav-item"><Link to="/shop-category" className="nav-link">Pantalones</Link></li>
                        <li className="nav-item"><Link to="/shop-category" className="nav-link">Accesorios</Link></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            <div className="panel panel-default sidebar-menu">
                <div className="panel-heading d-flex align-items-center justify-content-between">
                <h3 className="h4 panel-title">Marcas</h3><Link to="#" className="btn btn-sm btn-danger"><i className="fa fa-times-circle"></i><span className="d-none d-md-inline-block">Limpiar</span></Link>
                </div>
                <div className="panel-body">
                <form>
                    <div className="form-group">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" /> Adidas  (10)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/> Lacoste  (12)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/> Nike  (15)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/> Taverniti  (14)
                        </label>
                    </div>
                    </div>
                    <button className="btn btn-sm btn-outlined"><i className="fa fa-pencil"></i> Aplicar</button>
                </form>
                </div>
            </div>
            <div className="panel panel-default sidebar-menu">
                <div className="panel-heading d-flex align-items-center justify-content-between">
                <h3 className="h4 panel-titlen">Colores</h3><Link to="#" className="btn btn-sm btn-danger"><i className="fa fa-times-circle"></i><span className="d-none d-md-inline-block">Limpiar</span></Link>
                </div>
                <div className="panel-body">
                <form>
                    <div className="form-group">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/><span className="colour white"></span> Blanco (14)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/><span className="colour blue"></span> Azul (10)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/><span className="colour green"></span>  Verde (20)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/><span className="colour yellow"></span>  Amarillo (13)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/><span className="colour red"></span>  Rojo (10)
                        </label>
                    </div>
                    </div>
                    <button className="btn btn-sm btn-outlined"><i className="fa fa-pencil"></i> Aplicar</button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default Filtros;
