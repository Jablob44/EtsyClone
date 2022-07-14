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
                <div className="listing-index">
                    {this.props.listings.map(listing => {
                        return(
                            <ListingIndexItem key={listing.id} listing={listing} />
                        )
                    })}
                </div>
            )
        }
    }
}

export default ListingIndex;