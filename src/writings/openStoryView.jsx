import React from 'react'
import LikeButton from '../art/likeButton'
import '../css/openstoryview.css'
export default function OpenStoryView({selectedStory,handleClose}) {
    return (
        <div className="backdrop" onClick={handleClose}>
            <div className="full-story">
                <h1 className="page-heading">{selectedStory.title}</h1>
            <p className="story">{selectedStory.description || selectedStory.summary}</p>
            </div>
            <div></div>
            <LikeButton selectedDoc={selectedStory} type={'blog'} wrapperClassName={'bottom-panel'} />
            {/* <div className="bottom-panel">like</div>             */}
        </div> 
    ) 
}  
 