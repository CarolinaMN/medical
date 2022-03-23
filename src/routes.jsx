import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';

function LinkRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
    )
}

export default LinkRoutes;