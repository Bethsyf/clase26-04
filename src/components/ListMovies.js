import React from 'react'
import { getMoviesByCategory } from '../selectors/getMoviesByCategory';

import MoviesCard from './MoviesCard';

export const ListMovies = ({category}) => {

    const movies = getMoviesByCategory(category); 
    

    return (
        <div>
            <div className="card-columns">
                {
                    movies.map(movie => (
                       <MoviesCard key={movie.id}
                       {...movie}
                       />
                    ))
                }
            </div>
            
        </div>
    )
}