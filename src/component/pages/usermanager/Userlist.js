import React, {useEffect,useState } from "react";
import Usermanager from "../../../services/Usermanager";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

const Userlist=()=>{
    const [userlist,setuserlist]=useState(null);
    useEffect(() => {
        Usermanager.getuserlist()
          .then(responseData => {
            console.log(responseData);
            setuserlist(responseData);
          })
    }, []);
    if (!userlist) return null;

    return(
        <>
        <Header/>
        <main>
                <div className="container">
                    <table className="table mb-0">
                    <tbody>
                        <tr>
                            <td className="text-sm-start"><h3>User Manager</h3></td>
                            <td className="text-sm-end"><a className="nav-link active" aria-current="page" href="/user_manager/create">Create User</a></td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                {/* <th scope="col">S.N</th> */}
                                <th scope="col">Username</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">User Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                       
                        {userlist.map((data) => {
                            return(
                                <tr key={data._id}>
                                    <td>{data.username}</td>
                                    <td>{data.fullname}</td>
                                    <td>{data.email}</td>
                                    <td> {data.role==1 && "Super Admin"} {data.role==2 && "Developer"} {data.role==3 && "Bloger"}</td>
                                    <td> <a href={`/user_manager/update/${data._id}`}>Edit</a> | Delete</td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                    <nav aria-label="Page navigation pull-right">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </main>
        <Footer/>
        </>
    )
}

export default Userlist;