import React, { Fragment } from 'react'
import logo from '../../../../assets/img/logo.png'
function Logo(){
    return(
        <Fragment>
       <div className="col-md-2">     
  <a className="logo" href="/#"><img className="img-responsive logo" src={logo} alt="BYg Brewski"/></a>
  </div>
        </Fragment>
    )
}
export default (Logo)