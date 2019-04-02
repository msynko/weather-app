import React from 'react';

const SearchBar = (props) =>{
  return (
    <div>
       <form onSubmit={props.loadData}">
            <input type="text" name="city" placeholder="city"/>
            <input type="text" name="country" placeholder="country"/>
          <input type="submit" value="Submit"/>
        </form>
    </div>
    )
}
export default SearchBar;