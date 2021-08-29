import React,{useState} from 'react'
import ImageGrid from './imageGrid'
import Modal from './modal'
import { ScrollToTop } from './scrollToTop'
export default function Art() {
    const [selectedDoc,setSelectedDoc] = useState(null)
    return (
        <div className="art_wrapper">
             <div className="writing-page"> 
                    <h1 className="page-heading">Sketches</h1> 
                    
                    <p>I am someone who loves to draw. This has always been my goto activity since childhood. I consider, to draw is the best decision I have taken up in my life, as it taught me how important is it to focus on the activity itself rather than on the result.  </p>
            
            </div>
           <ImageGrid  setSelectedDoc={setSelectedDoc}/>
           {selectedDoc&&selectedDoc.url&& <Modal  setSelectedDoc={setSelectedDoc} selectedDoc={selectedDoc}/>}
           <ScrollToTop/>
        </div>
    )
}
