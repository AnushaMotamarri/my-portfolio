import React,{useState} from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PageLoader from '../../common_components/common_component';
import Modal from '../../art/modal';

function ViewCommissions() {
    const {docs} = useFirestore('commissions');
    const [selectedDoc,setSelectedDoc] = useState(null)
    console.log(docs)
    const handleClick=(doc)=>{
        setSelectedDoc(doc)
    }
    return (
        <div className="art_wrapper">
             <div className="writing-page"> 
                    <h1 className="page-heading">COMMISSIONS</h1> 
                    
                    {/* <p>I am someone who loves to draw. This has always been my goto activity since childhood. I consider, to draw is the best decision I have taken up in my life, as it taught me how important is it to focus on the activity itself rather than on the result.  </p> */}
            
            </div> 
            {(docs&&docs.length>0)? <div className="img-grid"> 
       
       {docs&&docs.map(doc=><div className="img-wrap"><LazyLoadImage src={doc.imageUrl}
       onClick={()=>handleClick(doc)}
       />
       </div>)}
       {selectedDoc&& <Modal setSelectedDoc={setSelectedDoc} selectedDoc={selectedDoc} imageKey='imageUrl' showLikeButton="hide"/>}
    </div>:<PageLoader/> }
        
        </div>
        
    ) 
}

export default ViewCommissions
