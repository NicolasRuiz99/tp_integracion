import React from 'react'

export default function Search({setSearch}) {
    return (
         <div className="col-sm-6 col-md-3" style={{float: 'right', paddingBottom:'0.5rem', paddingTop: '0rem', padding: '0.5rem'}}>
             <form role="search" className="navbar-form">
                <div className="input-group">
                  <input 
                  type="search" placeholder="Buscar" 
                  className="form-control" style={{'border-color':'#F4F6F6'}}
                  onChange={({ target: { value } }) => setSearch(value)}
                  onKeyPress={event => event.key === 'Enter' ? setSearch(event.target.value) : null}
                  /><span className="input-group-btn"></span>
                    <button type="button" className="btn btn-main" onClick={e => setSearch(e.target.value)}><i className="fa fa-search"></i></button>
                </div>
              </form> 
              </div>
    )
}
