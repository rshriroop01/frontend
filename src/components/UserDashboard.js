import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';


function UserDashboad({loggedIn, setLoggedIn}) {

    const navigate = useNavigate(); 

    function viewLoans() {
        navigate('/purchased-loans');
    }
    function applyLoan() {
        navigate('/applyLoan');
    }

    function viewItems() {
        navigate('/purchase-items');
    }
    return (
        <div className='container'>
            <div class="row row-cols-1 row-cols-md-3 g-4 mb-4">
                <div class="col">
                    <div class="card h-100">

                        <div class="card-body">
                            <img src="/images/cash-loan.jpg" class="card-img-top" alt="..." />
                            <h5 class="card-title">Loans</h5>
                            <p class="card-text">
                            Peek at the loans you currently have on your roster. You can make an informed decision about any future loans!        

                            </p>

                        </div>
                        <div class="card-footer">
                            <Button onClick={viewLoans} variant="primary">View Loans</Button>
                          

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">

                        <div class="card-body">
                            <img src="/images/apply-loan.jpg" height="180px" class="card-img-top" alt="..." />
                            <h5 class="card-title">Apply for a Loan</h5>
                            <p class="card-text">
                            Directly apply for a loan without any hesitation. Apply now!

                            </p>
                        </div>
                        <div class="card-footer">
                            <Button onClick={applyLoan} variant="primary">Apply</Button>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">

                        <div class="card-body">
                            <img src="/images/items.jpg" class="card-img-top" alt="..." />
                            <h5 class="card-title">View Items Purchased</h5>
                            <p class="card-text">
                                View all the current items that are currently being bought under a loan all together.
                            </p>
                        </div>
                        <div class="card-footer">
                            <Button onClick={viewItems} variant="primary">View items!</Button>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}






export default UserDashboad;