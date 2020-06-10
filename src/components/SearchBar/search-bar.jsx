import React from "react";
import "./search-bar.css";

function SearchBar({placeHolder,myFn}) {
    return <input className="search" type="search" placeHolder={placeHolder} onChange={myFn}/>;
}

export default SearchBar;