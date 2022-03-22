import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function LinkRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
    )
}

export default LinkRoutes;