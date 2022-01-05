import React from "react";
import { Link,useLocation,useNavigate} from "react-router-dom";


function Navbar() {
  let location = useLocation();
 
  const navigate = useNavigate();
  
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      
      { !localStorage.getItem('token') ? 
          <form className="d-flex">
          {location.pathname!=='/login'? <Link className="btn btn-secondary mx-1" to='/login' role="button">Log in</Link>:""}
          {location.pathname!=='/signup'? <Link className="btn btn-secondary mx-1" to="/signup" role="button">Sign Up</Link>:""}
          </form>
          : <button onClick={handleLogout} className="btn btn-secondary">Logout</button>  
        }
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
