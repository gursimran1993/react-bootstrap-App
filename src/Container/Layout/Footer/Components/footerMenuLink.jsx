import React, {Fragment} from 'react'

function FooterMenuLink(){
   return(
    <Fragment>
    <div className="row menu-nav">
<ul>
    <li><span></span><a href="/#">About Us</a></li>
    <li><span>.</span><a href="/#">Reservations</a></li>
    <li><span>.</span><a href="/#">Contact Us</a></li>
    <li><span>.</span><a href="/#">Order Online</a></li>
    <li><span>.</span><a href="/#">Packages</a></li>
    <li><span>.</span><a href="/#">Events</a></li>
</ul>
</div>
<div className="row menu-nav-bottom">
<ul>
    <li><a href="/#">Terms and Conditions</a></li>
    <li><a href="/#">Privacy Policy</a></li>
    <li><a href="/#">Careers</a></li>
</ul>
</div>
</Fragment>
   )
}

export default FooterMenuLink