import React,{useState} from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import '../css/moveToTop.css'
export const ScrollToTop = () => {
    const [visible,setVisible]= useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
    window.addEventListener('scroll',toggleVisible)

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
    return (
        visible?<div className="move-to-top-wrapper" onClick={scrollToTop}>
            <ExpandLessIcon className="move-icon"></ExpandLessIcon>
        </div>:<></>
    )
}
 