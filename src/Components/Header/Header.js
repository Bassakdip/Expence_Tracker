import React from 'react'
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {auth} from '../../firebase';

const Header = () => {
    const user = auth.currentUser;
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await signOut(auth);
            navigate("/login");
            console.log(user);
            alert("Signout successfully");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <h1 class="navbar-brand" href="/">MyWebLink</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/products">Products</a>
                        </li>
                        <div>
                            {user ? (
                                <button className="signupButton" onClick={logoutHandler}>Logout</button>
                            ) : (
                                <>
                                    <Link to='/login' className="loginButton">Login</Link>
                                    <Link to="/signup" className="signupButton">Signup</Link>
                                </>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
