import React,{Fragment} from "react";
import ProductItem from "./ProductItem";

const ProductList = ({list}) => {
    return (
        <Fragment>
            <div className="row products products-big">
                {list.map(item => (
                        <ProductItem 
                            key = {item.id}
                            item = {item}
                        />
                ))}
            </div>
        </Fragment>
    );
};

export default ProductList;