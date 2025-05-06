import React,{useState,useEffect} from 'react'
import '../../css/commissions.css'
import { useNavigate } from 'react-router';
import { content } from './config';

function InstructionItem(){
    return <div className='content-container'>
    <h4>
    Commission Procedure:
    </h4> <ol className='ml-15'>{content.steps.map((item)=><div>
             <li><h4>{item.title}</h4>
             <span>{item.description}</span>
             <ul className='ml-10'>
             {item.children?.map((i)=><li>{i}</li>) }
             </ul>
             </li>
     </div>)}</ol>
     </div>
 }

 function OrderFrom(){
    return <div> 
        <h4>
            Please fill in the below form to PLACE AN ORDER:
        </h4>
   
        <div className="google_form_commission_request">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1qW61TkXrGgZkizLg9A7yPpmL9Pj-Lxz-2R08IjrCxz1dNw/viewform?embedded=true" width="640" height="2265" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
 }
function OrderCommission() {
   
   
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    return (
        <div className="order_page_container page-content">
            <h1 className="align_center">Order a commission</h1>
            {content.description}
            <h3>What we deliver:</h3>
            <div>{content.weDeliver}
            <div onClick={()=>navigate('/commissions/view')} className="old-work"><a>Click here to view my old work</a></div>

            </div>
            
                <InstructionItem/>
                <OrderFrom/>
            
            
            </div>
            
           
    )
}
 
export default OrderCommission
