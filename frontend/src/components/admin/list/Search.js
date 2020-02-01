import React from 'react'

export default function Search({setSearch}) {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
    return (
         <div className="col-sm-6 col-md-2" style={{float: 'right', paddingBottom:'0.5rem', paddingTop: '0rem', padding: '0.5rem'}}>
             <form role="search" className="navbar-form" style={{borderStyle: 'solid', borderColor: '#bababa'}} >
                <div className="input-group">
                  <input 
                  type="search" placeholder="Buscar" 
                  className="form-control" style={{'border-color':'#F4F6F6'}}
                  onChange={(e) =>{handleSearch(e)}}
                  />
                </div>
              </form> 
              </div>
    )
}
