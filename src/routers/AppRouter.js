import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { ListMovies } from '../components/ListMovies';
import MoviesCard from '../components/MoviesCard';

import NavBar from '../components/Navbar';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Router>
                <Route path="/list" elements={<ListMovies />}></Route>
                <Route path="/pintarCard" elements={<MoviesCard />}></Route>
            </Router>
        </BrowserRouter>
    );
};

export default AppRouter;