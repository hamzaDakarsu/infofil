import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='row'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Filim Arayınız...'
			></input>
		</div>
	);
};

export default SearchBox;