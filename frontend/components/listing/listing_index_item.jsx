import React from "react";

class ListingIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="listing-index-item">
                {/* <img src="https://www.ladbible.com/community/celebrity-brazilian-keanu-reeves-doppelganger-says-looks-help-him-flirt-20200408"/> */}
                <h1 className="listing-item-title">{this.props.listing.title}</h1>
                <h2 className="listing-item-price">${this.props.listing.price}</h2>
            </div>
        )
    }
}

export default ListingIndexItem;