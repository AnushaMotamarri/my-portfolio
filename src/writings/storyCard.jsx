import React from 'react'
import LikeButton from '../art/likeButton'

 export default function StoryCard({card,setSelectedStory}) {
    return ( 
        <div className="story_card_wrapper" onClick={()=>setSelectedStory(card)}>
            <div className="story_img"> 
            <img src={card.imageUrl} alt="text"/>
            </div>
            <h2>{card.title}</h2>
            <div className="story_description">{card.summary}</div>
            <LikeButton selectedDoc={card} wrapperClassName={'blog-card-like-button'} type={'blog'}/>
        </div> 
    )
} 
