import React from 'react'
import LikeButton from './likeButton'


export default function Modal({setSelectedDoc,selectedDoc,imageKey='url',showLikeButton="show"}) {
    console.log(selectedDoc,imageKey)
    const handleClick = e=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedDoc(null)
        }
    }
    return (
        <div className="backdrop" onClick={(e)=>handleClick(e)}>
       
            <img src={selectedDoc[imageKey]} ></img>
            {showLikeButton==='show'&& <LikeButton selectedDoc={selectedDoc}/>}
        </div>
    )
}
