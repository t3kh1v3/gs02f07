import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Sobre } from "../pages/Sobre/Sobre";
import { Projeto } from "../pages/Projeto/Projeto";
import { Desafios } from '../pages/Desafios/Desafios';
import {Aplicativo} from '../pages/Contato/Aplicativo';
import React from 'react';


export const AppRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={(<Home />)}/>
            <Route path='/Sobre' element={(<Sobre />)}/>
            <Route path='/Projeto' element={(<Projeto />)}/>
            <Route path='/Desafios' element={(<Desafios />)}/>
            <Route path='/Aplicativo' element={(<Aplicativo />)}/>
        </Routes>
    </Router>
)