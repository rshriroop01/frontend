import React, {useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Logout({setLoggedIn}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    useEffect(() => {
        setLoggedIn(false);
        localStorage.clear();
    }, []);

    return (
        <div className="container text-center mt-5">
            <h2>Logout Successful</h2>
            <p>You have been successfully logged out.</p>
            <Button variant="wheat" onClick={handleLogout}>
                Return to Home
            </Button>
        </div>
    );
}

export default Logout;
