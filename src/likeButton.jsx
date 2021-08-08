import React,{useState,useEffect} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {updateFirestore} from './hooks/useFirestore'
export default function LikeButton({selectedDoc}) {
    const [isFavorite,setIsFavorite] = useState(localStorage.getItem(selectedDoc.id) === 'true')
    const [numLikes,setNumLikes] = useState(selectedDoc.likes || 0)
    const updateLocalStorage=(val)=>{
        localStorage.setItem(selectedDoc.id,val)
        if(!val){
                    let likes = numLikes-1
                    setNumLikes(likes)
                    updateFirestore('images',selectedDoc.id, likes)
                }
                else{
                
                    setNumLikes( numLikes+1 )
                    updateFirestore('images',selectedDoc.id, numLikes+1)
                }

        
        setIsFavorite(val)
    }
    return (
        <div className="like-btn-wrap">
            <div className="like-button">{isFavorite?<FavoriteIcon className="favorite" onClick={()=>updateLocalStorage(false)}/>:<FavoriteBorderIcon className="unfavorite" onClick={()=>updateLocalStorage(true)}/>}
            &nbsp; 
           <span className="num_likes">{numLikes}</span> 
            
            </div>
        </div>
    )
}
