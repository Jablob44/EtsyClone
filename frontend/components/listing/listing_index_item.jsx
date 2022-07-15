import React from "react";
import { Link } from "react-router-dom";
class ListingIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="listing-index-item">
                <Link className="ununderlined-link" to={`/listings/${this.props.listing.id}`}>
                    <img className="listing-image" src="https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=webp,fit=pad,dpr=2/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F970181805e8d16e5a4fa10c74420bfe8.png"/>
                    <h3 className="listing-item-title">{this.props.listing.title}</h3>
                    <h2 className="listing-item-rating">{this.props.listing.average_rating}</h2>
                    <h2 className="listing-item-creator-name">{this.props.creator}</h2>
                    <h2 className="listing-item-price">${this.props.listing.price}</h2>
                </Link>
            </div>
        )
    }
}

export default ListingIndexItem;