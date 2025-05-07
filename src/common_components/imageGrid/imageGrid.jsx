import React from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import './img_grid.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LikeButton from '../../art/likeButton';
import PageLoader from '../common_component';
import DownloadButton from '../../art/downloadButton';

export default function ImageGrid({setSelectedDoc,collectionName='images',imageUrlKey='url',showLikeButton=true,showDownloadButton}) {
    const {docs} = useFirestore(collectionName)
    const handleClick=(doc)=>{
        setSelectedDoc(doc)
    }
    return (
        (docs&&docs.length>0)? <div className="img-grid">
            {docs&&docs.map(doc=>(
             <>
                <div className="img-wrap" key={doc.id} onClick={()=>handleClick(doc)}>
                    <LazyLoadImage
                        threshold={500}
                        src={doc[imageUrlKey]}
                        className="single-img" 
                        />
                   { showLikeButton&&<LikeButton selectedDoc={doc} wrapperClassName={"like-btn"}/>}
                   {showDownloadButton&&<DownloadButton selectedDoc={doc} wrapperClassName={"like-btn"}/>}

                </div>
               
                </>
            ))}
        </div>:
        <PageLoader/>
    )
}

