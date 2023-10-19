import React, { useState } from "react";

const Register=()=>{
    const initialValues={fullname:"",username:"",email:"",password:""};
    const [formValue,setformValue]=useState(initialValues);
    const [formErrors,setformErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false);

    const handlechange=(e)=>{
        console.log(e);
        const {name,value}= e.target;
        setformValue({ ...formValue, [name]: value });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setformErrors(validate(formValue));
        setisSubmit(true);
    }

    const validate =(values)=>{
        const errors = {};
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!values.fullname){
            errors.fullname="Full name is reqired";
        }
        if(!values.username){
            errors.username="User Name is reqired";
        }
        if(!values.email){
            errors.email="Email is reqired";
        }else if(!validRegex.test(values.email)){
            errors.email="Email is not valid";
        }
        if(!values.password){
            errors.password="Password is reqired";
        }
        return errors;
    }

    return (
        <>
            <div className="container ">
                <div className="col-md-7 py-4 px-4 bgcustome">
                    <div className="d-flex justify-content-center mb-4">
                        <div className="col-md-5">
                            <img className="img-fluid" src="https://ezoominfotech.com/assets/nw_images/logo.png" />
                        </div>
                    </div>
                    {/* <pre>{JSON.stringify(formValue,undefined)}</pre> */}
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex justify-content  mb-3">
                            <div className="col-md-6">
                                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="text" name="fullname" className="form-control" value={formValue.fullname} onChange={handlechange} />
                                <span className="text-danger">{formErrors.fullname}</span>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" name="username" className="form-control" value={formValue.username} onChange={handlechange}/>
                                <span className="text-danger">{formErrors.username}</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" value={formValue.email} onChange={handlechange}/>
                            <span className="text-danger">{formErrors.email}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" value={formValue.password} onChange={handlechange}/>
                            <span className="text-danger">{formErrors.password}</span>
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
export default Register;