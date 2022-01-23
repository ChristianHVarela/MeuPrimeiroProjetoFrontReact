import React from "react";
import NavBar from "./navBar";

function NavBarItem(props){
    return(
        <li className="nav-item">
        <a className="nav-link" href={props.href}>{props.label}</a>
      </li>
    )
}
export default NavBarItem