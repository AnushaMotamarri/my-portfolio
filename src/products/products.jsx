import React,{useState,useEffect,useRef} from 'react'
function PayPal(){
    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder:(data,actions,err)=>{
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units:[
                       { description:"download art work ",
                        amount:{
                         
                            value:1
                        }
                    }
                    ]
                })
            },
            onApprove: async (data,actions)=>{
                const order = await actions.order.capture();
                console.log(order)
            },
            onError: (err)=>{
                console.log(err)
            }
        }).render(paypal.current)
    }, [])
    return <div>
        <div ref={paypal}></div>
    </div>
}
function Products() {
    const [checkout,setCheckout] = useState(false)
    return (
        <div className="art_wrapper">
             <div className="writing-page"> 
                    <h1 className="page-heading">Freebies</h1> 
                    {/* <p>I am someone who loves to draw. This has always been my goto activity since childhood. I consider, to draw is the best decision I have taken up in my life, as it taught me how important is it to focus on the activity itself rather than on the result.  </p> */}
                    {checkout?<div><PayPal/></div>:<button
                onClick={()=>{setCheckout(true)}}
                >Checkout</button>}
            </div> 
        </div>
    )
}

export default Products
