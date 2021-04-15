import React from 'react';

const  Card = ({name,email,id})=>{
    return (
        <div>
            <img alt="" src={`https://robohash.org/${id}?200*200`}/>
            <div>
            <h2>{name}</h2>
           <p> {email}</p>
            </div>
        </div>
    )
}

export default Card
