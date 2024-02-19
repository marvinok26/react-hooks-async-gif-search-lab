import React, { useState } from 'react';

const GifSearch = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Search gifs here' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default GifSearch;