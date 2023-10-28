import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Propertylist from "./component/pages/property/Propertylist";
import Addproperty from "./component/pages/property/Addproperty";
import Register from "./component/pages/user/Register";
import Login from "./component/pages/user/Login";
import ProtectedRoute from './services/ProtectedRoute';
import Userlist from "./component/pages/usermanager/Userlist";
import Createuser from "./component/pages/usermanager/Createuser";


const Routers =()=>{
    return(
        <Routes>
            <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
            <Route path="/property/list" element={<ProtectedRoute><Propertylist /></ProtectedRoute>}></Route>
            <Route path="/property/add" element={<ProtectedRoute><Addproperty/></ProtectedRoute>}></Route>
            <Route path="/user_manager/list" element={<ProtectedRoute><Userlist/></ProtectedRoute>}></Route>
            <Route path="/user_manager/create" element={<ProtectedRoute><Createuser/></ProtectedRoute>}></Route>
            <Route path="/user_manager/update/:id" element={<ProtectedRoute><Createuser/></ProtectedRoute>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    );
}
export default Routers;