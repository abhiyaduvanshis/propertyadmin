import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/Auth";
const Login=()=>{
    const navigate = useNavigate();
    const initialValues= { email:"",password:"" };
    const [formValue,setformValue]=useState(initialValues);
    const [formerror,setformerror]=useState({});
    const [isSubmit,setisSubmit]=useState(false);
    const [islogincheck,setislogincheck]=useState('');
    const handlechange = (e) =>{
        const { name, value } =e.target;
        setformValue({ ...formValue, [name]: value });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setformerror(validate(formValue));
        setisSubmit(true);
    }

    useEffect(()=>{
        if(Object.keys(formerror).length === 0 && isSubmit){
            AuthService.login(formValue.email,formValue.password).then((response)=>{
                console.log(response.data.token);
                if(response.status==200 && response.data.token!='' && response.data.statuscode===0){
                    navigate('/');
                   window.location.reload();
                }
                if(response.status==200 && response.data.statuscode===1){
                    setislogincheck(response.data.msg);
                }else{
                    setislogincheck(response.data.msg);
                }
            });
        }
    },[formerror]);

    const validate =(values)=> {
        const error = {};
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!values.email){
            error.email="Email is reqired";
        }else if(!validRegex.test(values.email)){
            error.email="Email is not valid";
        }
        if(!values.password){
            error.password="Password is reqired";
        }
        return error;
    }

    return (
        <>
            <div className="container ">
                <div className="col-md-5 py-4 px-4 bgcustome">
                    <div className="d-flex justify-content-center mb-4">
                        <div className="col-md-5">
                            <img className="img-fluid" src="https://ezoominfotech.com/assets/nw_images/logo.png" />
                        </div>
                    </div>
                    {/* <pre>{islogincheck}</pre> */}
                    <span className="text-danger">{islogincheck}</span>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" value={formValue.email} onChange={handlechange}/>
                            <span className="text-danger">{formerror.email}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" value={formValue.password} onChange={handlechange}/>
                            <span className="text-danger">{formerror.password}</span>
                            
                        </div>
                        <div className="mb-3 d-flex flex-row-reverse">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Login;