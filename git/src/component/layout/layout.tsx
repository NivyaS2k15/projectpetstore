import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {useNavigate} from "react-router-dom"




const Layout = () => {
    const navigate = useNavigate();
    return (
        <>
            
            <div className="main-navbar shadow-sm sticky-top" style={{ backgroundColor: '#7fffd450' }}>
        <div className="top-navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                        <h5 className="brand-name">Pet-Store</h5>
                    </div>
                    <div className="col-md-5 my-auto">
                        <form role="search">
                            <div className="input-group" style={{ backgroundColor: '#ffffff' }} >

                                <input type="search" placeholder="Search your product" className="form-control" />
                                <button className="btn bg-white" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5 my-auto">
                        <ul className="nav justify-content-end">
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-shopping-cart"></i> Cart (0)
                                </a>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                    Funda Ecom
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{ backgroundColor: '#5f9ea0' }} id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">All Products</a>
                        </li>
                       <li className="nav-item">
                            <a className="nav-link" href="#">Featured products</a>
                        </li>
                      
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>navigate("/signup")} href="#">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
            
            
                <Outlet />
            
            

        </>
    )
}

export default Layout;