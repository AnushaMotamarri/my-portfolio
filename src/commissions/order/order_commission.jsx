import React from 'react'
import '../../css/commissions.css'
import { useNavigate } from 'react-router';
function OrderCommission() {
    const navigate = useNavigate()
    return (
        <div className="order_page_container page-content">
            <h1 className="align_center">Order a commission</h1>
            <div>
            We, the humans are emotional. Life brings out the finest and the worst.The best way to record these feelings is to capture them is through photographs.  These play an important role in everyone’s life –
            they connect us to our past they remind us of people, places, feelings, and stories and help us to know
who we are and what are our dear ones to us.

<h3>What we deliver:
</h3>
<div>
We put the efforts to make your memories and
experiences more colourful, beautiful, and memorable through our work.
</div>
<div>
We make all types of Portraits be it in pencil sketch or in the digital art. We
 provide design/sketches for birthday, wedding, housewarming, or any other events you
 name it. We also design sketches for your social media platforms!!
</div>
<h4>
Commission Procedure:

</h4>
<div>
    <li>
    You can book your slot through any of our social media platforms/ WhatsApp/ Mail.
    </li>
    <li>
    50% of the price is to be paid as an advance at the time of slot booking.
    </li>
    <li>
    Once the advance is paid, 3 rough drafts (sketched, coloured & with background)
would be sent to you in 2 days. Changes to the drafts are accepted.
    </li>
    <li>
    Changes after the delivery would be charged additionally.</li>
<li>It usually takes 4 to 10 days to deliver the portrait from the slot booking day depending on Category you choose.</li>
<li>Upon completion, once the total payment is made, a high-resolution soft copy will be sent to you.</li>
<li>If you want your portrait to be framed & shipped to your address, additional payment would be requested before the delivery depending upon the size & location of delivery address.
    </li>
<li> We post the portrait making videos in our social media platforms to showcase our work. If there is any objection in this regard, explicit request must be made with us at the time of booking the slot.</li>
<li>If the portrait contains more than 2 persons, additional thousand rupees would be charged for each extra person.</li>

</div>
<div onClick={()=>navigate('/commissions/view')} className="cursor-pointer"><a>Click here to view my old work</a></div>
<h4>
    Please fill in the below form to PLACE AN ORDER:
</h4>

            </div>
            <div className="google_form_commission_request">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1qW61TkXrGgZkizLg9A7yPpmL9Pj-Lxz-2R08IjrCxz1dNw/viewform?embedded=true" width="640" height="2265" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>        </div>

            </div>
    )
}
 
export default OrderCommission
