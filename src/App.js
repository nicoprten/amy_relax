import React from 'react';
import {Routes, Route} from 'react-router-dom';

// COMPONENTS
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { FinalReservation } from './components/FinalReservation';
import { MyReservations } from './components/MyReservations';
import { Footer } from "./components/Footer.js";
import { NavBar } from "./components/NavBar.js";

import 'tailwindcss/tailwind.css';

export default function App(){

    return(
        <div className='font-kanit bg-gray0'>
            <NavBar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/reservation_resume'} element={<FinalReservation />} />
                <Route path={'/reservations'} element={<MyReservations />} />
                <Route path={'/dashboard'} element={<Dashboard />} />
            </Routes>
            <Footer />
        </div>
    )
}