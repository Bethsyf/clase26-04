import React from 'react'
import { ListMovies } from './ListMovies'


const HobbitCard = () => {
    return (
        <div>
            <h1>The Hobbit</h1>
            <hr/>
            <ListMovies category="hobbit"/>
        </div>
    )
}
export default HobbitCard