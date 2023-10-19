import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Home =()=>{
    return(
        <>
        <Header/>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 mb-4 p-8 mb-3 mb-sm-0">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">User Manager</h5>
                                <p className="card-text">Total Count : 100 </p>
                            
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-4 p-8">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Blog Manager</h5>
                                <p className="card-text">Total Count : 100 </p>
                            
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-4 p-8">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">City Manager</h5>
                                <p className="card-text">Total Count : 100 </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mb-4 p-8 mb-3 mb-sm-0">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Property Manager</h5>
                                <p className="card-text">Total Count : 100 </p>
                            
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-4 p-8">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Webstroy Manager</h5>
                                <p className="card-text">Total Count : 100 </p>
                            
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-4 p-8">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Testimonial Manager</h5>
                                <p className="card-text">Total Count : 100 </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mb-4 p-8 mb-3 mb-sm-0">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">Total Count : 100 </p>
                            
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-4 p-8">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">Total Count : 100 </p>
                            
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-4 p-8">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">Total Count : 100 </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer/>
        </>
    )
}
export default Home;