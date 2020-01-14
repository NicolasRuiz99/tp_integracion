import React,{Fragment,useState,useEffect} from "react";
import Color_sizeItem from "./Color_sizeItem";
import "./../../css/default.css"

const Color_sizeList = ({list, setSelectedItem, setSelectedStock}) => {

    const [colorList,setColorList] = useState ([]);
    const [sizeList,setSizeList] = useState ([]);
    const [selectedColor,setSelectedColor] = useState ('');
    const [selectedSize,setSelectedSize] = useState ('');
    const [item,setItem] = useState ({});

    const setColorValues = () => {
        const nList = [...new Set (list.map(e=>e.color))];
        setColorList (nList);
    }

    const setSizeValues = (e) => {
        let nList = list;
        nList = nList.filter((item)=> item.color === e);
        setSizeList (nList);
        
        
        setSelectedColor (e);
        //setValue (nList[0].size)
        let nItem = list;
        nItem = nItem.filter((item)=>item.color === e && item.size === nList[0].size);
        setSelectedItem (nItem[0]);
        setItem (nItem[0]);
        setSelectedSize (nList[0].size);
    }

    const setValue = (e) => {
        let nItem = list;       
        nItem = nItem.filter((item)=>item.color === selectedColor && item.size === e);
        setSelectedItem (nItem[0]);
        setItem (nItem[0]);
        setSelectedSize (e);
    }

    useEffect (()=>{
        if (list[0] !== undefined){
            setColorValues ();
            setSizeValues (list[0].color);
            setSelectedColor (list[0].color);
            setSelectedSize (list[0].size);
            setValue (list[0].size);
            setSelectedItem (list[0]);
            setItem (list[0]);
        }
    },[list]);

    return (
        <Fragment>
            <div className="sizes">
                      <div className="col-sm-10">
                      <h3>Colores disponibles</h3>
                        <select className="bs-select" onChange={e => setSizeValues (e.target.value)}>
                        {colorList.map((item)=>(
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
                          <select className="bs-select" onChange={e => setValue(e.target.value)}>
                          {sizeList.map((item)=>(
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
                        {(item.stock !== 0)? 
                        <h3>Unidades <span className="span-detail">({item.stock} disponible/s)</span></h3> :                    
                        <h3>Unidades <span className="span-detail">(sin stock disponible)</span></h3>
                        }
                      
                </div>
            </div>
        </Fragment>
    );
};

export default Color_sizeList;