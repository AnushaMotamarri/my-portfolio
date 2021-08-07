import React from 'react'
import { Link } from 'react-router-dom'
import './home_page.css'
import { CSSTransition } from 'react-transition-group'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
export default function HomePage() {
    return (
        <div className="home_page">
            <div className="home_page_wrapper">
            <div className="welcome_text">
                Welcome!
            </div>
            <div className="take-tour-button">
            <Link to='/professional' className="take-tour">Take A Tour <ChevronRightIcon/></Link>
            </div>
            </div>
        </div>
    )
}
