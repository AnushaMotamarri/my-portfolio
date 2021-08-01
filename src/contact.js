import React,{useState} from 'react'
import './contact.css'

export default function Contact() {
    const [value,setValue] = useState('')
    function onValueChange(event){
        
        setValue(event.target.value)
    }
    return (
        <div className="contact_wrapper">
            
        <div className="contact-box">
            <h3 className="flex-center"><i>Write to me!</i></h3>
            <div className="flex-center">
                <textarea className="contact-me-input" value={value} onChange={event=>onValueChange(event)}></textarea>
               
            </div>
            <div className="flex-center send-button">
            <button ><strong>Send</strong> </button>
            </div>
            
        </div>
        </div>
    )
}
