import React from "react";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getListings()
    }

    render(){
        console.log("llistings:", this.props.listings)
        if (!this.props.listings || !this.props.getListings){
            return null
        }else{
            return(
                <div className="all-listings-index">
                    <div className="main-page-greeting">
                        <h1>{!this.props.currentUser ? "Welcome to Etsme!" : `Hello, ${this.props.currentUser.username}. Welcome back!`}</h1>
                    </div>
                    <h1 className="">Listings:</h1>
                    <ul className="listing-index">
                        {this.props.listings.map(listing => {
                            return(
                                <ListingIndexItem key={listing.id} listing={listing} />
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }
}

export default ListingIndex;