import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({uponTyping}) => {
	return (
		<div className='search flex'>
			<div className="s-icon-div">
                <FontAwesomeIcon className='s-icon' icon={faSearch} size="1x" />
            </div>
			<input 
				className='pt2 pb2 pr1 pl3 tc'
				placeholder='Search for blogs by title'
				onChange={uponTyping}
			/>
		</div>
	);
}

export default Search;