
import React from 'react'
import '../style/NavBar.css'

import {Link} from  'react-router-dom';

const Navbar = () => {

    function NavLoggedIn (){
        return (
            <nav className='navbar'>
          <ul className='nav-list'>
                 <li className='nav-item'>
                     <Link to="/" className="nav-link">Home</Link>
                 </li>

                 <li className='nav-item'>
                     <Link to="/register" className="nav-link">About</Link>
                 </li>

                 <li className='nav-item'>
                     <Link to="/logout" className="nav-link">Logout</Link>
                 </li>

     

                 <li className='nav-item'>
                     <Link to="/UserDashboard" className="nav-link">Dashboard</Link>
                 </li>

            </ul>
            </nav>
        );
    }

    function NavPublic() {
        return (
            <nav className='navbar'>
             <ul className='nav-list'>
                 <li className='nav-item'>
//                     <Link to="/" className="nav-link">Home</Link>
//                 </li>

//                 <li className='nav-item'>
//                     <Link to="/register" className="nav-link">Register</Link>
//                 </li>

//                 <li className='nav-item'>
//                     <Link to="/login" className="nav-link">Login</Link>
//                 </li>

//                 {/* <Button variant="primary" onClick={addNewEmployee}>Add a New Employee</Button> */}

//                 <li className='nav-item' >
//                     <Link to= "/login" className='nav-link' >   
//                     Login</Link>
//                 </li>

//                 <li className='nav-item'>
//                     <Link to="/register" className="nav-link">AboutUs</Link>
//                 </li>

//             </ul>
//         </nav>
        );
    }

    return (
            <>
                
                        {!isAuth() ? <NavLoggedIn /> : <NavPublic />}
                
        </>
    );
};


export default Navbar;

