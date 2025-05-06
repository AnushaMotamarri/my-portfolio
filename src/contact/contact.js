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
            <div className="greetmsg"><i><b>Hi, I am Anusha Motamarri, nice to meet you! </b></i> 😊</div>
            <div className='contact-card'>
                <div className="description_about">I am a freelance illustrator based in <b>Hyderabad,India</b>. Professionally, I’m a <b>software engineer</b>, but at heart—I’m an artist. 
                    <br></br>I think I started drawing even before I learned the ABCs. My mom tells me I used to scribble circles on every piece of paper I could find around the house—those were probably my first-ever drawings 😊.<br></br> Art runs in the family—my dad is a self-taught artist and a constant source of inspiration. 
                    While academics took over for a while, the pandemic gave me the chance to reconnect with my creative side, and since then, art has been an inseparable part of my life again. I’m also a hobby writer and enjoy expressing myself through both words and visuals.
                    Through this platform, I’ll be sharing all my recent artwork—from personal projects to commissioned pieces.I take orders for <b>custom portraits</b> and artwork for <b>birthdays</b>,<b>weddings</b>, <b>housewarmings</b>, and any other special events. For collaborations, commissions, or any queries, feel free to reach out:  📩 motamarrianusha01@gmail.com.
                    </div> 
                <div className="social_media_contact_links">
                <a href="https://www.instagram.com/the_blunt_brush/" target="_blank"><img className = "social_media_icon" title="Instagram" src={instagramIcon}></img></a>
                <a href="https://www.behance.net/motamarrianusha" target="_blank"><img  className = "social_media_icon" title="Behance" src={behanceIcon}></img></a>
                </div>
            </div>
            
        </div>
        </div>
    )
}
