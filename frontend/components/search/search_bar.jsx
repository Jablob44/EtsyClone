import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="search-bar">
                 <input className="search-input" placeholder="Search!" type="text" />
                 <button className="search-bar-button"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=""><path fillRule="evenodd" clipRule="evenodd" d="M3.392 1.713a6.086 6.086 0 019.466 5.06 6.085 6.085 0 01-1.403 3.886l3.693 3.693a.562.562 0 11-.796.796l-3.693-3.693a6.085 6.085 0 11-7.267-9.742zm3.38.1a4.96 4.96 0 104.96 4.96m-4.96-4.96a4.96 4.96 0 014.96 4.96"></path></svg></button>
            </div>
        )
    }
}

export default SearchBar