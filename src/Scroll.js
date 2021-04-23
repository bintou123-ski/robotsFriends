import React, { Component } from 'react';

const Scroll = ()=>{
    return(
        <div style={{overflow:'scroll', border:'5px solid black',height:'800px'}}>
            {props.Children}
        </div>
    )
}

export default Scroll;