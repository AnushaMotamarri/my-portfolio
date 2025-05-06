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
            <div className="writing-page-container"> 
            <h1 className="page-heading">Thoughts</h1> 
            
            <p  className='mt-10'>I’m a recreational writer—I write purely for the joy of it. It’s my way of expressing myself and watching my thoughts take shape on the page. If you enjoy exploring new perspectives and heartfelt reflections, you’re more than welcome to read along. 😊 </p>
                
            <section className='story-cards'>
                {docs.map(card=>(
                <StoryCard card={card} setSelectedStory={setSelectedStory}/>
            ))}
            </section>
       
        {selectedStory&&<OpenStoryView selectedStory={selectedStory} handleClose={handleClose}/>}
        </div>
        </div>
    )
}
