import React from "react";
import { Link } from "react-router-dom";
class UserDropdown extends React.Component{

    constructor(props){
        super(props)
    }

    // handleClick(){
    //     this.props.history.push({
    //         pathname: 'listings/new'
    //     })
    // }
    render(){
        return(
            // <div className="dropdown">
            <ul className="dropdown-items">
                    <div className="space-above"></div>
                    <h1 className="username-dropdown">{this.props.currentUser.username}</h1>
                    <Link to='/createListing'>
                        <button className="dropdown-button" >Make a listing</button>
                    </Link>
                    <Link to={`/users/${this.props.currentUser.id}`}>
                        <button className="dropdown-button">Your account</button>
                    </Link>
                </ul>
            // </div>
        )
    }
}

export default UserDropdown;