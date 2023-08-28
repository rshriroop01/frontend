import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function AdminDashboard({loggedIn, setLoggedIn}) {
    return (
        <div className='container mt-4'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                <div className='col-md-4'>
                    <Card>
                        <Card.Img variant="top" src="/images/customer2.jpg" />
                        <Card.Body>
                            <Card.Title>Customer Data Management</Card.Title>
                            <Card.Text>
                                Manage customer data and information.
                            </Card.Text>
                            <Link to="/employees">
                                <Button variant="primary">Go to Employees</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4'>
                    <Card>
                        <Card.Img variant="top" src="/images/loan1.jpg" />
                        <Card.Body>
                            <Card.Title>Loan Card Management</Card.Title>
                            <Card.Text>
                                Manage loan cards and related information.
                            </Card.Text>
                            <Link to="/loans">
                                <Button variant="primary">Go to Loans</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4'>
                    <Card>
                        <Card.Img variant="top" src="/images/item1.jpg" />
                        <Card.Body>
                            <Card.Title>Item Master Data</Card.Title>
                            <Card.Text>
                                Manage item master data and details.
                            </Card.Text>
                            <Link to="/items">
                                <Button variant="primary">Go to Items</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
