import React,{Fragment,useState,useEffect} from "react";
import Color_sizeItem from "./Color_sizeItem";

const Color_sizeList = ({list}) => {

    const [newList,setNewList] = useState ([]);

    useEffect (()=>{
        if (list[0] !== undefined){
            setValues (list[0].color);
        }
    },[list]);

    const setValues = (e) => {
        const nList = list;
        nList.filter((item)=> item.color = e);
        setNewList (nList);
    }

    return (
        <Fragment>
            <div className="sizes">
                      <div className="col-sm-10">
                      <h3>Colores disponibles</h3>
                        <select className="bs-select" onChange={e => setValues(e.target.value)}>
                        {list.map((item)=>(
                            <Color_sizeItem 
                                key = {item.id}
                                item = {item}
                                type = {2}
                            />
                        ))}
                        </select>
                        </div>
                        <br />
                      </div>
            <div className="sizes">
                      <div className="col-sm-10">
                        <h3>Tamaños disponibles</h3>
                          <select className="bs-select" >
                          {newList.map((item)=>(
                            <Color_sizeItem 
                                key = {item.id}
                                item = {item}
                                type = {1}
                            />
                          ))}
                        </select>
                        </div>
                        <br/>                        
                      </div>
            <div className="sizes">
                      <div className="col-sm-11">
                      <h3>Unidades <span className="span-detail">(566 disponibles)</span></h3>
                        <select className="bs-select" >
                        {newList.map((item)=>(
                            <Color_sizeItem 
                                key = {item.id}
                                item = {item}
                                type = {3}
                            />
                        ))}
                        </select>
                </div>
            </div>
        </Fragment>
    );
};

export default Color_sizeList;