import React from "react";
//import * as S from "./styles"
//importando as pag de rotas
import Design from "./Design";
import Ui from "./Ui"
import Motion from "./Motion"



import {BrowserRouter, Routes, Route, Link, Router} from "react-router-dom"
export default function Navegacao (){
     
    return(
        <>
        <BrowserRouter>
        <nav>
            <ul>
            <li><Link to="/">Motion</Link></li>
            <li><Link to="/Design">Design</Link></li>
            <li><Link to="/Ui">Ui</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Motion/>}/>
            <Route path="Design" element={<Design/>}/>
            <Route path="Ui" element={<Ui/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
    
}