import React from 'react'
import homePageImage from '../images/home_page_logo2.jpeg';
import '../css/home.css'
import {useNavigate} from 'react-router';
function Home() {
    const navigate = useNavigate()
    let cardDetails = [{
        imgUrl:'',
        heading:'Work',
        text:'I started scribbling since the time I knew how to hold a pen.  There have been a number of sketchbooks I maintained since then. But our family has been a nomad. I have lost all those sketchbooks while switching between the houses. I regret not taking a special care of them. Since then I make sure to take a picture of every sketch I made. I wanted to have a dedicated space, where I can preserve all my work. So, here I am showcasing all the work I had done in the recent past.',
        showOrderButton:false,
        showViewButton:true,
        color:'#D7EEFF',
        route:'/art'
    },
    {
        imgUrl:'',
        heading:'Commissions',
        text:' Back in college, I first got a request from a Facebook friend to illustrate their father’s portrait. This concept of sketching for someone and getting paid for it is very new for me then. I denied to charge her, but I consider myself lucky to have got a client who insisted me charge her. Seeing that work, many friends in the college wanted me to sketch a portrait of them or gift a portrait to their loved ones. Since then I have been taking orders for commissioned work. More details inside.',
        showOrderButton:true,
        showViewButton:true,
        color:'#D6EADF',
        orderRoute:'/commissions/order',
        route:'/commissions/view'
    },
    // {
    //     imgUrl:'',
    //     heading:'Products',
    //     text:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.',
    //     showOrderButton:false,
    //     showViewButton:false,
    //     showCheckoutButton:true,
    //     color:'#E6C6FF'
    // },
    {
        imgUrl:'',
        heading:'Freebies',
        text:"Here is some free artwork available for you to download. These are printable as they are available in high resolution formats. So you can print them and have them hung to the wall or you can use them as ur mobile / desktop wallpapers. Let me know if you would like to get any of my other artwork as downloadable work. You can mail me on motamarrianusha01@gmail.come or DM me on my Instagram page mentioned mentioned in the About page. ",
        showOrderButton:false,
        showViewButton:true,
        color:'#F6D0E8', 
        route:'/freebies'
    },
    {
        imgUrl:'',
        heading:'Writings',
        text:"I have never been expressive verbally since childhood. Writing and art are the only tools I often use to vent out my unexpressed emotions. I am not a great writer, in fact not even close to that. But writing and art gives my heart immense joy. In a way Its therapeutic. For the longest time I have hidden my writings from everyone. I never let anyone know that I write with the fear of judgement. But not anymore as I know the WHY of my writings. It is a part of me and my being. Welcome to my thoughts and the short stories.",
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
                    <img src={homePageImage}></img>

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
 