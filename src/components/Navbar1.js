import React, { useState, useEffect } from 'react';
import '../style/NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar1 = ({loggedIn, setLoggedIn, isAdmin, setIsAdmin}) => {
    
    const navigate = useNavigate();
    let loggedInStatus = false;

    useEffect(() => {
        loggedInStatus = isAuth();
        setLoggedIn(loggedInStatus);
        console.log(loggedIn);
        if (loggedInStatus) {
            const isAdminUser = localStorage.getItem('isAdmin') === 'true';
            console.log("IS ADMIN? " + localStorage.getItem('isAdmin'));
            setIsAdmin(isAdminUser);
            console.log("IS ADMIN?? " + isAdmin)
        }
        else{
            setLoggedIn(false);
            localStorage.clear();
            navigate('/logout');
        }
    }, []);


    function NavLoggedIn() {
        return (
            <nav className='navbar'>
                <div className='nav-left'>
                    <Link to="/" className="nav-link app-name">LoanEzz</Link>
                </div>
                <div className='nav-right'>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link to={isAdmin ? "/adminDashboard" : "/userDashboard"} className="nav-link">
                                {isAdmin ? "Admin Dashboard" : "User Dashboard"}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about-us" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    function isAuth() {
        const user = localStorage.getItem('employee');
        console.log(user);
        return user!=null;
    }

    function NavPublic() {
        return (
            <nav className='navbar'>
                <div className='nav-left'>
                    <Link to="/" className="nav-link app-name">LoanEzz</Link>
                </div>
                <div className='nav-right'>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link to="/about-us" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    return (
        <>
            {loggedIn ? <NavLoggedIn /> : <NavPublic />}
        </>
    );
};

export default Navbar1;
