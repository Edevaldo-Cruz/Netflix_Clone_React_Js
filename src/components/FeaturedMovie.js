import React from 'react';
import './FeaturedMovie.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => {
    return (
        
            <section className='featured'>
                <div>{item.original_name}</div> 
            </section>
        
    )
}