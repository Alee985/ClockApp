import React from 'react';

const products=
    [
        {name:"Ali",id:"1222"},
        {name:"Ahmed",id:"1ds22"},
        {name:"Butt",id:"1sds22"},
    ]
export default function Product(props){
    const products=
    [
        {name:"Ali",id:"1222"},
        {name:"Ahmed",id:"1ds22"},
        {name:"Butt",id:"1sds22"},
    ]
    
    return(
        <div>
            <ul>
                {products.map((product)=>
                <div>
                <li>{product.name}</li><br/>
                <li>P.ID {product.id}</li>
                </div>

                )}
            </ul>


        </div>
    );
}