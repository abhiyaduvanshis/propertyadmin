import React from "react";
const Header=()=>{
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src="https://ezoominfotech.com/assets/nw_images/logo.png" alt="" width="200" /></a>
                    <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">User Login Name</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  mb-4">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/property/list" >Property Manager</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/property/list" >City Manager</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/property/list" >Blog Manager</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <nav aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </div>
            </nav>
            
        </>
    )
}
export default Header;