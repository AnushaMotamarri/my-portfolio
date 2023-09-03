import React,{useState} from 'react'
import '../css/contact.css'
import aboutDP from '../images/aboutDP.png'
import instagramIcon from  '../images/Instagram_icon.png';
import behanceIcon from  '../images/behance_logo.png';

export default function Contact() {
    return (
        <div className="contact_wrapper">
           
        <div className="contact-box">
            <img className="contact_me_dp" src={aboutDP}></img>
            <div className="greetmsg"><i><b>Hi, I am Anusha Motamarri, nice to meet you!</b></i></div>
            <div className="description_about">I am a freelance illustrator based in Hyderabad,India. I am a software engineer by profession. But by heart, I am an artist. 
                I am a hobby writer too.
                I think I started drawing before even I knew ABCD. My mom tells me that I used to keep drawing circles on every piece of paper I found in the house. Yeah, Those were the first drawings I ever made 😉
                 . My father is a self-taught artist by hobby. He is a constant inspiration to me. 
                 For a long time, I left art aside because of academic pressure. But during the pandemic, I revived my hobbies and art is one of them.
                I accept commssioned portraits, artworks for birthdays, weddings, housewarming, or for any other events.
               This platform is a place where I will be posting all my artworks. For further information and any kind of queries or concerns contact <b>motamarrianusha01@gmail.com</b>.
                </div> 
            <div className="social_media_contact_links">
            <a href="https://www.instagram.com/the_blunt_brush/" target="_blank"><img className = "social_media_icon" title="Instagram" src={instagramIcon}></img></a>
            <a href="https://www.behance.net/motamarrianusha" target="_blank"><img  className = "social_media_icon" title="Behance" src={behanceIcon}></img></a>
            </div>
        </div>
        </div>
    )
}
