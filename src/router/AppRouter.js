import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Sobre } from "../pages/Sobre/Sobre";
import { Projeto } from "../pages/Projeto/Projeto";
import { Vitimas } from '../pages/Vitimas/Vitimas';
import React from 'react';


export const AppRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={(<Home />)}/>
            <Route path='/Sobre' element={(<Sobre />)}/>
            <Route path='/Projeto' element={(<Projeto />)}/>
            <Route path='/Problema' element={(<Vitimas />)}/>
        </Routes>
    </Router>
)