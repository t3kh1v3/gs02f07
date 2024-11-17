import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import React from 'react';

export const AppRouter = () => (
    <Router>
        <Routes>
            <Route path='/'
                element={(
                <Home />
                )}
            />
        </Routes>
    </Router>
)