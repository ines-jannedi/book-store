import React, { useState } from "react";



const Onebook=(props)=>{
    

    const one=props.query

console.log(one);
    return(
        <div>
            
                <div className="onebook" >
             <h2>{one.category}</h2>
            <h4>{one.title}</h4>
            <img src={one.cover} alt=""/>
            <p>{one.description}</p>
            <span>{one.price}</span>
                    
                </div>
            
           
        </div>
    )

}


export default Onebook;