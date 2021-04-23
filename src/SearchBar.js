import React, { Component,setState } from 'react';
import Scroll from "./Scroll"

const SearchBar=({onSearchBar}) =>{

  return (
    <div className="two">
             <Scroll>
             <SearchBar  onSearchBar={onSearchBar}/>
             </Scroll>
            
        </div>
  )
}

export default SearchBar
