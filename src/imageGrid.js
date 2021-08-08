import React from 'react'
import { useFirestore } from './hooks/useFirestore'
import './img_grid.css'
export default function ImageGrid({setSelectedDoc}) {
    const {docs} = useFirestore('images')
    const handleClick=(doc)=>{
        setSelectedDoc(doc)
    }
    return (
        <div className="img-grid">
            {docs&&docs.map(doc=>(
             <>
                <div className="img-wrap" key={doc.id} onClick={()=>handleClick(doc)}>
                    {/* <div className="sketch-img"> */}
                    <img src={doc.url}></img> 
                    {/* </div> */}
                    
                    
                </div>
                {/* <div className="home-page-like">Like</div> */}
                </>
            ))}
        </div>
    )
}

