import React, { Fragment } from 'react'
import FbIcon from '../../../../assets/img/fb-icon.png'
import InstaIcon from '../../../../assets/img/insta-icon.png'
import TwitterIcon from '../../../../assets/img/twitter-icon.png'

function FooterSocial(){
    return(
        <Fragment>
            <div className="d-inline-flex socialLink">
        <ul>
            <li><a href="/#"><img src={FbIcon} alt="fb"/><br/>Facebook</a></li>
            <li><a href="/#"><img src={InstaIcon} alt="fb"/><br/>Instagram</a></li>
            <li><a href="/#"><img src={TwitterIcon} alt="fb"/><br/>Twitter</a></li>
        </ul>
        </div>
        </Fragment>
    )
}

export default FooterSocial