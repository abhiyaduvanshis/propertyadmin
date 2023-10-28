import axios from "axios";
const API_URL = "http://localhost:5001/api/user/";

const login =(email,password)=>{
    return axios
    .post(API_URL+ "login",{
        email,
        password
    })
    .then((response)=>{
        //console.log(response)
        if(response.status==200 && response.data.token!=''){
            localStorage.setItem('usertoken',response.data.token);
        }
        return response;
    })
}

const createuser=(username,fullname,email,role,password)=>{
    const token = localStorage.getItem("usertoken");
    return axios
    .post(API_URL+"register",{
        username,
        fullname,
        email,
        role,
        password  
    },
    {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', 
        }
    })
    .then((response)=>{
       // console.log(response); 
        // if(response.status==200 && response.email!=''){
        //     localStorage.setItem('user',JSON.stringify(response.data));
        // }
        if(response.status==200 && response.data.statuscode===1){
            return response.data.msg;
        }else{
            return response.data.msg;
        }
    })
}

const getCurrentUser=()=>{
    const token = localStorage.getItem("usertoken");
    return axios
    .get(API_URL+"current", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', 
        }
        }).then((response) => {
           // console.log(response);
            return response;
        });
        
}


const logout = () => {
    localStorage.removeItem("usertoken");
    return 'logout';
};

 const AuthService = {
    login,
    getCurrentUser,
    logout,
    createuser
}
  
export default AuthService;
