import React from 'react'
import LikeButton from './likeButton'


export default function Modal({setSelectedDoc,selectedDoc}) {
    
    const handleClick = e=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedDoc(null)
        }
    }
    return (
        <div className="backdrop" onClick={(e)=>handleClick(e)}>
       
            <img src={selectedDoc.url} ></img>
            <LikeButton selectedDoc={selectedDoc}/>
        </div>
    )
}
