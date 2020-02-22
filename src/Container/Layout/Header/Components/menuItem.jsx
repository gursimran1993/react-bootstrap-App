import React, { Fragment } from 'react'
function MenuItems({nav}){
    return(
        <Fragment> 
            <div className="col-md-9">
  <ul className="navbar-nav">
{nav.map((item, index) => (
    <li className="nav-item" key={index}>
      <a className="nav-link" href={item.url}>{item.title}</a>
    </li>
    ))}
  </ul>
  </div>
        </Fragment>
    )
}
export default MenuItems