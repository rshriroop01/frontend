import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewLoan = () => {

    const [empLoans, setEmpLoans] = useState([]); 
    const navigate = useNavigate();
    const BASE_REST_API_URL = "http://localhost:8085/loanEzz/api/loans/";

    // 


    useEffect(() => {
        listEmpLoans();
    }, [empLoans.length]);

    function listEmpLoans() {
        const employee = JSON.parse(localStorage.getItem('employee'));
        const employeeId = employee["employeeId"];
        axios.get(BASE_REST_API_URL+`${employeeId}`).then((response) => {
            console.log("Success");
            setEmpLoans(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }


    return (
        <div className='container'>
            <h2 className="h2 text-center">Items</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Loan ID</th>
                    <th>Loan Type</th>
                    <th> Duration in Years</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empLoans.map(emploan => 
                            <tr key={emploan.loanId}>
                                <td>{emploan.loanId}</td>
                                <td>{emploan.loanType}</td>
                                <td>{emploan.durationInYears}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ViewLoan;