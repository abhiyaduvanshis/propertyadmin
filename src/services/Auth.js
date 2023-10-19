import axios from "axios";
const API_URL = "http://localhost:5001/api/user/";

const login =(email,password)=>{
    return axios
    .post(API_URL+ "login",{
        email,
        password
    })
    .then((response)=>{
        console.log(response)
        if(response.status==200 && response.email!=''){
            localStorage.setItem('user',JSON.stringify(response.data));
        }
        return response;
    })
}

const getCurrentUser=()=>{
    return JSON.parse(localStorage.getItem("user"));
}

const logout = () => {
    localStorage.removeItem("user");
    return 'logout';
};

 const AuthService = {
    login,
    getCurrentUser,
    logout
}
  
export default AuthService;
