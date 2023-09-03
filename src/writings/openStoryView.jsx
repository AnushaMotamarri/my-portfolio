import React from 'react'
import LikeButton from '../art/likeButton'
import '../css/openstoryview.css'
import  ReactHtmlParser from 'react-html-parser'
export default function OpenStoryView({selectedStory,handleClose}) {
    return (
        <div className="backdrop" onClick={handleClose}>
            <div className="full-story">
                <h1 className="page-heading">{selectedStory.title}</h1>
            <p className="story">
                {ReactHtmlParser(selectedStory.description ||selectedStory.summary)}
            </p>
            </div>
            <div></div>
            <LikeButton selectedDoc={selectedStory} type={'blog'} wrapperClassName={'bottom-panel'} />
        </div> 
    ) 
}  
