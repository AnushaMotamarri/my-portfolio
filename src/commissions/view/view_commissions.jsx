import React,{useState} from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PageLoader from '../../common_components/common_component';
import Modal from '../../art/modal';
import { useNavigate } from 'react-router';

function ViewCommissions() {
    const {docs} = useFirestore('commissions');
    const [selectedDoc,setSelectedDoc] = useState(null);
    const navigate = useNavigate();
    console.log(docs)
    const handleClick=(doc)=>{
        setSelectedDoc(doc)
    }
    return (
        <div className="art_wrapper">
             <div className="writing-page"> 
                    <h1 className="page-heading">COMMISSIONS</h1> 
                    
                    <p className='section-description'>Hey! Here's the custom work I've created for clients—each piece tailored with care and creativity. Browse through my past projects to see the range of styles and stories I've brought to life. One made just for you? <span className="old-work" onClick={()=>navigate('/commissions/order')}>Place your order here.</span></p>
            
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
