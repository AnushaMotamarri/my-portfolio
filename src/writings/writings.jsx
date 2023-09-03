import React,{useState} from 'react'
import '../css/writing.css'
import { useFirestore } from '../hooks/useFirestore'
import StoryCard from './storyCard' 
import OpenStoryView from './openStoryView'
export default function Writings() {
    const {docs} = useFirestore('blog')
    const [selectedStory,setSelectedStory] = useState(null)
    const handleClose = e=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedStory(null)
        }
    }
    return (
        <div className="blog-wrapper">
        <div className="writing-page"> 
           <h1 className="page-heading">Thoughts</h1> 
           
           {/* <p>I am a recreational writer too. I write for fun, to express myself, and just to see my thoughts flow. If you are someone who is intrested in reading new perspectives, you are welcome :) </p> */}
            
        </div>
        {docs.map(card=>(
            <StoryCard card={card} setSelectedStory={setSelectedStory}/>
        ))}
        {selectedStory&&<OpenStoryView selectedStory={selectedStory} handleClose={handleClose}/>}
            
        </div>
    )
}
