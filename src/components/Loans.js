import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getAllLoans } from '../service/LoanService';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoanCard = () => {

    const [loans, setLoans] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        listLoans();
    }, []);

    function listLoans() {
        getAllLoans().then((response) => {
            setLoans(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewLoans() {
        navigate('/addLoan');
    }

    return (
        <div className='container'>
            <h2 className="h2 text-center">Available Loan Cards</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Loan ID</th>
                        <th>Duration</th>
                        <th>Loan Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loans.map(loanCard =>
                            <tr key={loanCard.loanId}>
                                <td>{loanCard.loanId}</td>
                                <td>{loanCard.durationInYears}</td>
                                <td>{loanCard.loanType}</td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Button variant="primary" onClick={addNewLoans}>Add a New Loan</Button>
        </div>
    )
}

export default LoanCard;