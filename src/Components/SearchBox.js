import React from 'react';


 const SearchBox = ({searchField,searchChange}) => {

	return (
		<input 
		type='text'
		className='pa2 ma3 bg-blue input-reset ba0'
		placeholder='search' 
		onChange = {searchChange}
		/>
	)
}

export default SearchBox;
