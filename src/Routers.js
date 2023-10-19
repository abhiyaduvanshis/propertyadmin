import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Propertylist from "./component/pages/property/Propertylist";
import Addproperty from "./component/pages/property/Addproperty";
import Register from "./component/pages/user/Register";
import Login from "./component/pages/user/Login";
import ProtectedRoute from './services/ProtectedRoute';

const Routers =()=>{
    return(
        <Routes>
            <Route exact path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
            <Route exact path="/property/list" element={<ProtectedRoute><Propertylist/></ProtectedRoute>}></Route>
            <Route exact path="/property/add" element={<ProtectedRoute><Addproperty/></ProtectedRoute>}></Route>
            <Route exact path="/register" element={<Register/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
    );
}
export default Routers;