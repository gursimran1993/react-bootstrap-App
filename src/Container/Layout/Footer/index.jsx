import React from 'react'
import FooterImg from '../../../assets/img/footer-bg.png'
import FooterTitle from './Components/footerTitle'
import FooterSocial from './Components/footerSocial'
import FooterMenuLink from './Components/footerMenuLink'
import Copyright from './Components/copyRight'
function Footer(){
    return(
   <footer  className="footer-bg-img"  style={{backgroundImage:`url(${FooterImg})`}}>
   <FooterTitle/>
   <FooterSocial/>
   <FooterMenuLink/>
   <Copyright/>
   </footer>
   )
}
export default Footer