import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

const Propertylist =()=>{
    return(
        <>
        <Header/>
            <main>
                <div className="container">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">Property Name</th>
                            <th scope="col">City</th>
                            <th scope="col">Developer Name</th>
                            <th scope="col">Created Date</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                                <td>Godrej Property</td>
                                <td>Noida</td>
                                <td>Godrej</td>
                                <td>27-04-23</td>
                                <td>27-04-23</td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Godrej Property</td>
                                <td>Noida</td>
                                <td>Godrej</td>
                                <td>27-04-23</td>
                                <td>27-04-23</td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Godrej Property</td>
                                <td>Noida</td>
                                <td>Godrej</td>
                                <td>27-04-23</td>
                                <td>27-04-23</td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Godrej Property</td>
                                <td>Noida</td>
                                <td>Godrej</td>
                                <td>27-04-23</td>
                                <td>27-04-23</td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Godrej Property</td>
                                <td>Noida</td>
                                <td>Godrej</td>
                                <td>27-04-23</td>
                                <td>27-04-23</td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Godrej Property</td>
                                <td>Noida</td>
                                <td>Godrej</td>
                                <td>27-04-23</td>
                                <td>27-04-23</td>
                            </tr>

                            <tr>
                                <th scope="row">1</th>
                                <td>Godrej Property</td>
                                <td>Noida</td>
                                <td>Godrej</td>
                                <td>27-04-23</td>
                                <td>27-04-23</td>
                            </tr>
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
export default Propertylist;