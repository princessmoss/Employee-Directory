import React from "react";

import "../styles/searchBar.css"

const SearchBar = (props) => {
        return (
            <form>
                <div className= "form-group search-widget">
                <div className="input-group mb-3">
                <input 
                    onChange={props.handleInputChange}
                    value={props.search} 
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder='Search directory for Employee'
                    id="search"
                    />
                </div>
                </div>
            </form>
        );

}

export default SearchBar;