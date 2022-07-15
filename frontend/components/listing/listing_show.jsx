import React from "react";

class ListingShow extends React.Component{
    constructor(props){
        super(props)
    }
    // broken
    // componentDidMount(){
    //     console.log("the listing", this.props.listing)
    //     this.props.getListing(this.props.listingId)
    // }

    render(){
        console.log("the test of all test", this.props.listing)
        if (!this.props.listing){
            return null;
        }else{
            return(
                <div className="show-page">
                        <img className="listing-show-image" src="https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=webp,fit=pad,dpr=2/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F970181805e8d16e5a4fa10c74420bfe8.png"/>
                        <div className="show-page-info">
                            <h1 className="listing-show-title">{this.props.listing.title}</h1>
                            <h2 className="listing-show-price">${this.props.listing.price}</h2>
                            <h2 className="listing-show-rating">{this.props.listing.average_rating}</h2>
                            <h2 className="listing-show-body">{this.props.listing.body}</h2>
                            <button className="add-to-cart">Add to cart</button>
                        </div>
                </div>
            )
        }
    }
}

export default ListingShow;