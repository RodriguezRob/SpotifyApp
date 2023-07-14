import React, {useCallback, useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((event) => {
            setTerm(event.target.value)}, []);

    const search = useCallback(()=>{
        props.onSearch(term)
    }, [props.onSearch, term]);



    return(
        <div className="SearchBar">
            <input className='SearchBar' placeholder='Enter A Song Name' onChange={handleTermChange} />
            <button className='SearchButton' onClick={search}>Search</button>
        </div>
    )
};


export default SearchBar;
