import React, { Fragment } from 'react'
import BannerImg from '../../../assets/img/banner-img.jpg'
function Banner(){
return(
<Fragment>
  <img className="img-fluid w-100" src={BannerImg} alt={BannerImg}/>
</Fragment>
  )
}

export default Banner