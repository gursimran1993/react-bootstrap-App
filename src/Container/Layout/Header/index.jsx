import React, { Fragment } from 'react'
import MenuItems from './Components/menuItem'
import Logo from './Components/logo'
import Login from './Components/login'
function Header(){
    const menuLinks = [
        {
        title:"Our Beers",
        url:"#"
    },
    {
        title:"Packages",
        url:"#"
    },
    {
        title:"Reservation",
        url:"#"
    },
    {
        title:"Gallery",
        url:"#"
    },
    {
        title:"About Us",
        url:"#"
    },
    {
        title:"Contact us",
        url:"#"
    },
    {
        title:"Order Online",
        url:"#"
    }


] 
    return(
        <Fragment>
            <div className="mainContainer">
            <nav className="navbar navbar-expand-lg navbar-light">
            <Logo/>
            <MenuItems nav = {menuLinks}/>
            <Login/>
            </nav>
            </div>
        </Fragment>
    )
}
export default (Header)

