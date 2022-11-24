import React from 'react';
import {Routes, Route} from 'react-router-dom';

// COMPONENTS
import { Home } from './components/Home';

import 'tailwindcss/tailwind.css';

export default function App(){

    return(
        <div className='w-100vw font-kanit'>
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
        </div>
    )
}