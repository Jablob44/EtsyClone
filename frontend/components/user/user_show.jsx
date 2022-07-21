import React from "react";
import ListingIndexItem from "../listing/listing_index_item";
import { Link } from "react-router-dom";
class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("working - mount");
        this.props.fetchAuthListings().then(() => this.render())
    }

    render(){
        console.log("working - top of render");
        // this.props.fetchAuthListings().then()
        if (!this.props.authListings){
            console.log("you have no listings :(");
            return(
                <div>
                    <h1>Username: {this.props.currentUser.username}</h1>
                    <br/>
                    <h2>Email: {this.props.currentUser.email}</h2>
                    <br/>
                    <h1 className="your-listings">Your listings:</h1>
                    <br />
                    <div>
                        Make some listings to make them appear here!
                    </div>
                </div>
            )
        }else{
            console.log("working - else");
            return(
                <div>
                    <h1>Username: {this.props.currentUser.username}</h1>
                    <br/>
                    <h2>Email: {this.props.currentUser.email}</h2>
                    <br/>
                    <h1 className="your-listings">Your listings:</h1>
                    <div className="all-user-listings">
                        {this.props.authListings.map(listing => {
                                console.log("working - top of loop");
                                return(
                                    <div>
                                        <ListingIndexItem key={listing.id} listing={listing} />
                                        <Link to={`/listings/${listing.id}/edit`}>
                                            <button>Edit</button>
                                        </Link>
                                        <Link to={`/users/${this.props.currentUser.id}`}>
                                            <button onClick={() => this.props.deleteListing(listing.id)}>Delete</button>
                                        </Link>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            )
        }
    }
}

export default UserShow;