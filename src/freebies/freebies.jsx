import React,{useState} from 'react'
import ImageGrid from '../common_components/imageGrid/imageGrid';
function Freebies() {
    const [selectedDoc,setSelectedDoc] = useState(null)

    return (
        <div className="art_wrapper">
             <div className="writing-page"> 
                    <h1 className="page-heading">Freebies</h1>             
            </div> 
            <ImageGrid
            setSelectedDoc={setSelectedDoc}
            collectionName={'freebies'}
            imageUrlKey={'imageUrl'}
            showLikeButton={false}
            showDownloadButton={true}
            />
        </div>
   
    )
}

export default Freebies
