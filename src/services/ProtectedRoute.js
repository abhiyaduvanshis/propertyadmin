
import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user');
        if(userToken){
            const dataToken = JSON.parse(userToken);
            //console.log(dataToken.token);
            if (!dataToken.token || dataToken.token === 'undefined') {
                setIsLoggedIn(false);
                return navigate('/login');
            }
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
            return navigate('/login');
        }
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;
