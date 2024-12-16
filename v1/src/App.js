import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/blog/create";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {

  const navigate = useNavigate();

  // Check if the user is authenticated by looking for the auth_token in localStorage
  const authToken = localStorage.getItem('auth_token');

  // Handle logout functionality
  const handleLogout = () => {
    // Remove the auth_token from localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('user');

    // Optionally navigate the user to the Home or Login page after logout
    navigate('/');
  };

  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/"} className="nav-link">Home</Link>
          </li>


          {/* Conditionally render Login and Register links if auth_token does not exist */}
          {!authToken ? (
            <>
              <li className='nav-item'>
                <Link to={"/login"} className="nav-link">Login</Link>
              </li>
              <li className='nav-item'>
                <Link to={"/register"} className="nav-link">Register</Link>
              </li>
            </>
          ) : (

            <>
              <li className='nav-item'>
                <Link to={"/create"} className="nav-link">Create</Link>
              </li>
              <li className='nav-item'>
                <button onClick={handleLogout} className="nav-link btn btn-link">
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
