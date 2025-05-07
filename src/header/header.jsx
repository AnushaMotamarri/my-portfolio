import React,{useState,useEffect} from 'react'
import {HeaderDetails} from '../enums'
import './header.css'
import {useLocation} from 'react-router';
import { 
    useNavigate
  } from "react-router-dom";
  import MenuIcon from '@mui/icons-material/Menu';
  import CloseIcon from '@mui/icons-material/Close';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Header() {
    const navigate=useNavigate();
    const [darkMode,setIsDarkMode] = useState(localStorage.getItem("theme")==="dark");
    console.log(darkMode)
    const [selectedTab,setSelectedTab] = useState('home');
    const {pathname} = useLocation();
    const [isMenuClicked,setIsMenuClicked] = useState(false);
    function onTabSelect(name){
        if(name){
            setSelectedTab(name)
            navigate(HeaderDetails[name].route);
            setIsMenuClicked(false)
        }
    } 
    useEffect(() => {
        switch(pathname){
            case '/about': setSelectedTab('about');
                            break;
            case '/art':setSelectedTab('art');
                        break;
            case '/commissions/view':setSelectedTab('commissions');
                        break;
            case '/commissions/order':setSelectedTab('commissions');
                        break;
            case '/freebies':setSelectedTab('freebies');
                break;
        }
       

    }, [pathname]);
    const setDarkMode =()=>{
        setIsDarkMode(true);
        localStorage.setItem("theme","dark")
        
    }
    const setLightMode =()=>{
        setIsDarkMode(false);
        localStorage.setItem("theme","light")

        
    }
    const toggleTheme = (isDarkTheme) =>{
        isDarkTheme?setDarkMode():setLightMode()
    }
    useEffect(()=>{
        if(darkMode){
            document.querySelector('body').setAttribute('data-theme','dark')
        }
        else{
            document.querySelector('body').setAttribute('data-theme','light')
        }
    },[darkMode])
    return (
        <div className="header_wrapper">
           <div to="/" className="header_item">Anusha</div> 
           <div className='display-flex'>
           {!darkMode&&<DarkModeIcon onClick={()=>toggleTheme(true)}/>}
            {darkMode&& <LightModeIcon onClick={()=>toggleTheme(false)}/>}
             <div className="header_categories">
                {(Object.keys(HeaderDetails)||[]).map((name)=>{
                    return <div onClick={()=>onTabSelect(name)} className={`header_item header_item_${name} ${name===selectedTab?'active':'inactive'}`} key={name}>
                        { HeaderDetails[name].label}
                    </div>

                })}
            </div>
            {isMenuClicked&& <div className="header_categories_hamburger">
                {(Object.keys(HeaderDetails)||[]).map((name)=>{
                    return <div onClick={()=>onTabSelect(name)} className={`header_item header_item_${name} ${name===selectedTab?'active':'inactive'}`} key={name}>
                        { HeaderDetails[name].label}
                    </div>

                })}
            </div>}
            <div className="hamburger_navbar">
            {isMenuClicked?
                <div className={`header_item header_item_signIn`}>
                <CloseIcon onClick={()=>setIsMenuClicked(false)}/>
            </div>
                :
                <div className={`header_item header_item_signIn`}>
                    <MenuIcon onClick={()=>setIsMenuClicked(true)}/>
                </div>} 
            </div>
          
           </div>
          
          
          
        </div>
    )
}
