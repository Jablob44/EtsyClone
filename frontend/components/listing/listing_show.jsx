import React from "react";

class ListingShow extends React.Component{
    constructor(props){
        super(props)
    }
    // broken:
    componentDidMount(){
        console.log("the listing", this.props.listing)
        this.props.getListing(this.props.listingId)
    }

    render(){
        console.log("the test of all test", this.props.listing)
        if (!this.props.listing){
            return null;
        }else{
            return(
                <div className="show-page">
                        <div className="full-page-info">
                            <img className="listing-show-image" src={this.props.listing.photoUrl}/>
                            <div className="show-page-info">
                                <h1 className="listing-show-title lst">{this.props.listing.title}</h1>
                                <h2 className="listing-show-price lst">${this.props.listing.price}</h2>
                                <h2 className="listing-show-rating lst">{this.props.listing.average_rating}</h2>
                                <h2 className="listing-show-body lst">{this.props.listing.body}</h2>
                                <button className="add-to-cart lst">Add to cart</button>
                            </div>
                        </div>
                        <br/>
                        <div className="reviews">
                            <h1>Reviews:</h1>
                            <br />
                            <h1>One day this will be a review container/component. 10/10 wouldn't recommend</h1>
                        </div>
                </div>
            )
        }
    }
}

export default ListingShow;