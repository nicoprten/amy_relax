import React from 'react';
import {Routes, Route} from 'react-router-dom';

// COMPONENTS
import Home from './components/Home';
import Dashboard from './components/Dashboard';

import 'tailwindcss/tailwind.css';

export default function App(){

    return(
        <div className='w-100vw font-kanit bg-white'>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/dashboard'} element={<Dashboard />} />
            </Routes>
        </div>
    )
}