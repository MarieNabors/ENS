import React from "react";
import "./Nav.css";


const Nav = props =>

  <div className="navbar">
      <a href=".">Home</a>
      <a href=".">Test01</a>
      <a href=".">Test02</a>
  </div>

//drop down menu
//https://www.npmjs.com/package/react-simple-dropdown

  // var Menu = React.createClass({
  //     render: function () {
  //         return (
  //             <Dropdown>
  //                 <DropdownTrigger>Profile</DropdownTrigger>
  //                 <DropdownContent>
  //                     <img src="avatar.jpg" /> Username
  //                     <ul>
  //                         <li>
  //                             <a href="/profile">Profile</a>
  //                         </li>
  //                         <li>
  //                             <a href="/favorites">Favorites</a>
  //                         </li>
  //                         <li>
  //                             <a href="/logout">Log Out</a>
  //                         </li>
  //                     </ul>
  //                 </DropdownContent>
  //             </Dropdown>
  //         )
  //     }
  // });

export default Nav;
