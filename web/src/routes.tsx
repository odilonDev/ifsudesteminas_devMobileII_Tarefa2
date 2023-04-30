import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import CoachList from './pages/CoachList';
import CoachForm from './pages/CoachForm';


function Rotas () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Landing/>} />
                <Route path="/study" element={<CoachList/>} />
                <Route path="/give-classes" element={<CoachForm/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;