import React from 'react'; 
import App from '../App';
import AppBlog from '../AppBlog';
import About from '../pages/About';
import Login from './Login';
import axios from 'axios'


import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    BrowserRouter,
    Navigate
  } from "react-router-dom";

class Home extends React.Component{
    render(){
      return (
          <BrowserRouter>
            {/* <div>
                <News />
                <Blog />
                <About />
            </div> */}
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <div class=" mx-auto" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link" href="/">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/About">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Blog" element={<AppBlog />} />
                <Route path="/About" element={<About />} />
                <Route path="/Login" element={<Login />} />
                /* Logout */
                <Route path ="/Logout"
                render={() => {
                    localStorage.clear();
                    axios.post("http://api-login-pti.herokuapp.com/api/logout",
                    {
                    token : localStorage.getItem('token')
                    }, { headers : { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"}})
                    return <Navigate to="/Login"/>
                }
                }
                /> 
            </Routes>
          </BrowserRouter>
      );
    }
  }
  export default Home;