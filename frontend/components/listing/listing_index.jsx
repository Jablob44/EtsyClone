import React from "react";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component{
    constructor(props){
        super(props)
        this.newListings = this.props.listings
    }

    componentDidMount(){
        this.props.getListings()
    }

    category(){
        console.log("newListings in category: ", this.newListings);
        if(!this.props.category){
            return this.newListings
        }
        else{
            this.newListings = this.props.listings.filter((listing) => listing.category === this.props.category)
            return this.newListings
        }
    }

    render(){
        console.log("llistings:", this.props.listings)
        if (!this.props.listings || !this.props.getListings || !this.newListings){
            return null
        }else{
            console.log("newListings in render: ", this.newListings);
            console.log("category return value in render: ", this.category());
            return(
                <div className="all-listings-index">
                    <div className="main-page-greeting">
                        <h1>{!this.props.currentUser ? "Welcome to Etsme!" : `Hello, ${this.props.currentUser.username}. Welcome back!`}</h1>
                    </div>
                    <h1 className="listing-index-title">Listings:</h1>
                    <ul className="listing-index">
                        {
                        this.props.listings.map(listing => {
                            console.log("inside map of category")
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