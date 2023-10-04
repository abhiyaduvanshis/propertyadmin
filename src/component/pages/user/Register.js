import React from "react";
const Register=()=>{
    return (
        <>
            <div className="container ">
                <div className="col-md-7 py-4 px-4 bgcustome">
                    <div className="d-flex justify-content-center mb-4">
                        <div className="col-md-5">
                            <img className="img-fluid" src="https://ezoominfotech.com/assets/nw_images/logo.png" />
                        </div>
                    </div>
                    <div className="d-flex justify-content  mb-3">
                      
                        <div className="col-md-6">
                            <label for="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="col-md-6">
                            <label for="exampleInputEmail1" className="form-label">Username</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                   
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 d-flex flex-row-reverse">
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;