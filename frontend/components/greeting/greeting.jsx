import React from "react";
import {Link} from "react-router-dom"
import UserDropdown from "../dropdown/user_dropdown_container";

// class Greeting extends React.Component {
//     constructor(props){
//         super(props)
//     }

//     render(){
//         const sessionLinks = () => (
//             <nav className="login-signup">
//               <Link to="/login">Login</Link>
//                 <br></br>
//               <Link to="/signup">Sign up!</Link>
//             </nav>
//           );
            
//         const personalGreeting = () => (
//             <hgroup className="header-group">
//               <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
//               <button className="header-button" onClick={this.props.logout}>Log Out</button>
//             </hgroup>
//         );
//         if (this.props.currentUser){
//             return personalGreeting
//         }
//         else{
//             return sessionLinks
//         }
//     }
// }
// console.log("hit container greeting")
const Greeting = ({ currentUser, logout, openModal }) => {
    // console.log("Inside greeting")
    const sessionLinks = () => (
      <nav className="login-signup">
          {/* <Link to="/login" className="ununderlined-link">Login</Link> */}
        <button onClick={() => openModal('login')} className="ununderlined-link right-buttons">Login</button>
      
        {/* <button>
          <Link to="/signup">Sign up!</Link>
        </button>         */}
      </nav>
    );
    const personalGreeting = () => (
      <hgroup className="header-group">
        <div className="dropdown">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <UserDropdown/>
        </div>
        <Link to='/'>
          <button className="header-button" onClick={logout}>Log Out</button>
        </Link>
      </hgroup>
    );
    // console.log("just before return")
    if (currentUser){
        console.log("current user: ", currentUser)
        return personalGreeting()
    }
    else{
        return sessionLinks()
    }
  };
//   console.log("after greeting")

export default Greeting;