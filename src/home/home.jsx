import React from 'react'
import homePageImage from '../images/home_page_logo2.jpeg';
// import freebiesImage from '../images/lord_krishna.jpeg';
// import commissionsImage from '../images/commissions.png';
// import workImage from '../images/work.png';
// import writingsImage from '../images/abdulkalam.png'
import '../css/home.css'
import {useNavigate} from 'react-router';
function Home() {
    const navigate = useNavigate()
    let cardDetails = [{
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-459b3.appspot.com/o/lord_krishna.jpeg?alt=media&token=2cd95a9c-622b-4ad8-bd9f-a82f2cfbb20a",
        heading:'Work',
        text:'I\'ve been scribbling since I first learned how to hold a pen. Over the years, I\'ve filled countless sketchbooks with my drawings. But growing up in a nomadic family meant frequent moves—and along the way, I lost all of those sketchbooks.I deeply regret not taking special care of them. That loss taught me something important: to preserve every piece I create. Now, I make sure to photograph each sketch I make.This website is my dedicated space—a personal gallery to showcase and preserve all the work I\'ve created in recent years.',
        showOrderButton:false,
        showViewButton:true,
        color:'#D7EEFF',
        route:'/art'
    },
    {
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-459b3.appspot.com/o/commissions.png?alt=media&token=e308dd38-6d1b-41cc-be51-505b4731bcc5",
        heading:'Commissions',
        text:'It all began back in college, when a Facebook friend asked me to illustrate a portrait of her father. The idea of creating art for someone—and being paid for it—was entirely new to me. I initially refused to charge her, but she insisted, and I consider myself lucky to have had such a thoughtful first client.That portrait sparked something. Soon, more friends from college reached out, asking for custom sketches—some for themselves, others as heartfelt gifts for their loved ones.Since then, I’ve been happily accepting commissions and creating personalized artwork.',
        showOrderButton:true,
        showViewButton:true,
        color:'#D6EADF',
        orderRoute:'/commissions/order',
        route:'/commissions/view'
    },
    {
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-459b3.appspot.com/o/work.png?alt=media&token=ab3d7ab5-f7ed-412c-b8b7-26f5ae5700c4",
        heading:'Freebies',
        text:"Here’s a collection of free artwork available for you to download and enjoy. All pieces are in high-resolution formats—perfect for printing and framing, or for using as wallpapers on your mobile or desktop.If you\'d like to see any of my other artwork made available for download, feel free to reach out!You can email me at motamarrianusha01@gmail.com or send me a DM on Instagram (details on the About page).",
        showOrderButton:false,
        showViewButton:true,
        color:'#F6D0E8', 
        route:'/freebies'
    },
    {
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-459b3.appspot.com/o/abdulkalam.png?alt=media&token=2d51a98d-af66-4507-8fd8-1eb790738004",
        heading:'Writings',
        text:"I've never been very expressive when it comes to speaking. Since childhood, writing and art have been my safe spaces—ways to let out the emotions I often couldn’t voice. I don’t consider myself a great writer—not even close—but writing brings me immense joy. It’s therapeutic. For the longest time, I kept my writings hidden, afraid of being judged. But not anymore. I now understand why I write. It’s a part of who I am—a reflection of my inner world.Welcome to my thoughts, my stories, and everything in between.",
        showOrderButton:false,
        showViewButton:true,
        color:'#E0D7FF',
        route:'/writings'
    }
    ] 
    return (
        <div className="landing_page_container">
            <div className="landing_page">
                <div className="landing_page__img">
                    <img src={homePageImage} className="home_page_logo" alt=""/>
                </div>
               <div className="landing_page__info">
                   <p className="landing_page__text">
                   HELLO!<br/>
                   Welcome to my silent world.
                   </p>
                    <div  className="landing_page__cta" onClick={()=>navigate('/about')}>About Me</div>
               </div>
              
            </div>
            <div className="blog_post_container">
            {cardDetails.map(card=>
                <div className="blog-post" style={{backgroundColor:card.color}}>
                <div className="blog-post__img">
                    <img alt='display' src={card.imgUrl}></img>

                </div>

                <div className="blog-post__info">
                    <h1 className="blog-post__title">
                        {card.heading}
                    </h1>
                    <p className="blog-post__text">
                        {card.text}
                    </p>
                    {card.showViewButton&& <div className="blog-post__cta" onClick={()=>navigate(card.route)}>
                        View
                    </div>}
                    {card.showOrderButton&&<div  className="blog-post__cta" onClick={()=>navigate(card.orderRoute)}>
                        Order
                    </div>}
                {card.showCheckoutButton&&<div className="blog-post__cta" >
                    Checkout!
                </div>}
                

                </div>
            </div>)
        
            }
            
            </div>
            
        </div>
    )
}

export default Home
 