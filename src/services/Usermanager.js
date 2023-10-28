import axios from "axios";
const API_URL = "http://localhost:5001/api/user/";

const getuserlist=()=>{
    const token = localStorage.getItem("usertoken");
    return axios
    .get(API_URL+"userlist", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', 
        }
        }).then((response) => {
            return response.data;
        });   
}

const getuserbyid=(userid)=>{
    const token = localStorage.getItem("usertoken");
    return axios
    .get(API_URL+"userlistbyid",{userid}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', 
        }
        }).then((response) => {
            return response.data;
        });   
}

const updateuser=(user_id,username,fullname,email,role)=>{
    const token = localStorage.getItem("usertoken");
    return axios
    .post(API_URL+"updateuser/"+user_id,{
        username,
        fullname,
        email,
        role
    },
    {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', 
        }
    })
    .then((response)=>{
        if(response.status==200 && response.data.statuscode===1){
            return response.data.msg;
        }else{
            return response.data.msg;
        }
    })
}

const Usermanager = {
    getuserlist,
    getuserbyid,
    updateuser
}
  
export default Usermanager;