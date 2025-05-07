import React from 'react'
import { Link } from 'react-router-dom'
import './home_page.css'

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
export default function HomePage() {
    return (
        <div className="home_page">
            <div className="home_page_wrapper">
            <div className="welcome_text">
                Welcome!
            </div>
            <div className="take-tour-button">
            <Link to='/home' className="take-tour">Take A Tour <ChevronRightIcon/></Link>
            </div>
            </div>
        </div>
    )
}
