import React from 'react'
import { useFirestore } from '../hooks/useFirestore'
import '../css/img_grid.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from '../images/loading.gif'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LikeButton from './likeButton';

export default function ImageGrid({setSelectedDoc}) {
    const {docs} = useFirestore('images')
    const handleClick=(doc)=>{
        setSelectedDoc(doc)
    }
    return (
        (docs&&docs.length>0)? <div className="img-grid">
            {docs&&docs.map(doc=>(
             <>
                <div className="img-wrap" key={doc.id} onClick={()=>handleClick(doc)}>
                    <LazyLoadImage
                        threshold={1000}
                        src={doc.url}
                        className="single-img"
                        />
                    <LikeButton selectedDoc={doc} wrapperClassName={"like-btn"}/>
                </div>
               
                </>
            ))}
        </div>:
        <div className="page_loading"><img src={image}/></div>
    )
}

