import React,{useState} from 'react'
import ImageGrid from '../common_components/imageGrid/imageGrid'
import Modal from './modal'
import { ScrollToTop } from '../common_components/scrollToTop/scrollToTop'
export default function Art() {
    const [selectedDoc,setSelectedDoc] = useState(null)
    return (
        <div className="art_wrapper">
             <div className="writing-page"> 
                    <h1 className="page-heading">Sketches</h1>             
            </div>
           <ImageGrid  setSelectedDoc={setSelectedDoc}/> 
           {selectedDoc&&selectedDoc.url&& <Modal  setSelectedDoc={setSelectedDoc} selectedDoc={selectedDoc}/>}
           <ScrollToTop/>
        </div>
    )
}
