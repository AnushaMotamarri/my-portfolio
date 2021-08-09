import React,{useState} from 'react'
import ImageGrid from './imageGrid'
import Modal from './modal'
import { ScrollToTop } from './scrollToTop'
export default function Art() {
    const [image,setImage] =  useState(null)
    const [selectedImageId,setSelectedImageId] = useState(null)
    const [selectedDoc,setSelectedDoc] = useState(null)
    return (
        <div className="art_wrapper">
           <ImageGrid  setSelectedDoc={setSelectedDoc}/>
           {selectedDoc&&selectedDoc.url&& <Modal  setSelectedDoc={setSelectedDoc} selectedDoc={selectedDoc}/>}
           <ScrollToTop/>
        </div>
    )
}
