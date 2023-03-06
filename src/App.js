import React from 'react';
import {Routes, Route} from 'react-router-dom';

// COMPONENTS
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { FinalReservation } from './components/FinalReservation';
import { Footer } from "./components/Footer.js";

import 'tailwindcss/tailwind.css';

export default function App(){

    return(
        <div className='font-kanit bg-white'>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/datos_reserva'} element={<FinalReservation />} />
                <Route path={'/dashboard'} element={<Dashboard />} />
            </Routes>
            <Footer />
        </div>
    )
}