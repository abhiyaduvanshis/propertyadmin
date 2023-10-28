import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import AuthService from "../../../services/Auth";
import Usermanager from "../../../services/Usermanager";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

const Createuser = () => {
    const slug = useParams();
    const initialValues = {fullname: "", username: "", role: "", email: "", password: "" };
    const [formValue, setformValue] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [islogincheck, setislogincheck] = useState('');
    //console.log(slug.id);
    const handlechange = (e) => {
        // console.log(e);
        const { name, value } = e.target;
        setformValue({ ...formValue, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValue));
        setisSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            if(!slug.id){
                AuthService.createuser(formValue.username, formValue.fullname, formValue.email, formValue.role, formValue.password)
                .then((response) => {
                    //sconsole.log(response);
                    setislogincheck(response);
                    window.location.reload();
                })
            }else{
                Usermanager.updateuser(formValue.username, formValue.fullname, formValue.email, formValue.role)
                .then((response) => {
                    setislogincheck(response);
                    window.location.reload();
                })
            }
        }
    }, [formErrors]);


    useEffect(() => {
        Usermanager.getuserbyid(slug.id)
          .then(responseData => {
            console.log(responseData);
            setformValue(responseData);
          })
    }, []);

    const validate = (values) => {
        const errors = {};
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!values.fullname) {
            errors.fullname = "Full name is reqired";
        }
        if (!values.username) {
            errors.username = "User Name is reqired";
        }
        if (!values.role) {
            errors.role = "User Role is reqired";
        }
        if (!values.email) {
            errors.email = "Email is reqired";
        } else if (!validRegex.test(values.email)) {
            errors.email = "Email is not valid";
        }
        if (!values.password && !slug) {
            errors.password = "Password is reqired";
        }
        return errors;
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <table className="table mb-4">
                        <tbody>
                            <tr>
                                <td className="text-sm-start"><h3>User Manager</h3></td>
                                <td className="text-sm-end"><a className="nav-link active" aria-current="page" href="/user_manager/list">User List</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="p-2">
                        <span className="text-danger">{islogincheck}</span>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="userid" value={slug.id}/>
                            <div className="d-flex justify-content mb-3">
                                <div className="col-md-6 regclass">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                    <input type="text" name="username" className="form-control" value={formValue.username} onChange={handlechange} />
                                    <span className="text-danger">{formErrors.username}</span>
                                </div>
                                <div className="col-md-6 regclass">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                    <input type="text" name="fullname" className="form-control" value={formValue.fullname} onChange={handlechange} />
                                    <span className="text-danger">{formErrors.fullname}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content  mb-3">
                                <div className="col-md-6 regclass">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="text" name="email" className="form-control" value={formValue.email} onChange={handlechange} />
                                    <span className="text-danger">{formErrors.email}</span>
                                </div>
                                <div className="col-md-6 regclass">
                                    <label htmlFor="exampleInputEmail1" className="form-label">User Role</label>
                                    <select name="role" className="form-control" onChange={handlechange}>
                                        <option value="">Select User Role</option>
                                        <option value="1">Developer</option>
                                        <option value="2">Bloger</option>
                                    </select>
                                    <span className="text-danger">{formErrors.role}</span>
                                </div>
                            </div>
                            <div className="mb-3 regclass">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" value={formValue.password} onChange={handlechange} />
                                <span className="text-danger">{formErrors.password}</span>
                            </div>
                            <div className="mb-3 d-flex flex-row-reverse">
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Createuser;