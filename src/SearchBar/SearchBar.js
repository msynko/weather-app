import React from 'react';

const SearchBar = (props) =>{
  return (
     
    <form onSubmit={props.loadData}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country" />
    <button>Get Weather</button>
  </form>
    
    )
}
export default SearchBar;