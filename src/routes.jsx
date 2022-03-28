import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import MedicalAreas from './Components/MedicalAreas';

function LinkRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/medical-areas" element={<MedicalAreas></MedicalAreas>}></Route>
        </Routes>
    )
}

export default LinkRoutes;