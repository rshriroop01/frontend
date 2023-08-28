import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getAllEmpItems } from '../service/EmpItemService';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewItem = () => {

    const [empitem, setItems] = useState([]); 
    const navigate = useNavigate();
    const BASE_REST_API_URL = "http://localhost:8085/loanEzz/api/purchased-items/"

    // 


    useEffect(() => {
        listEmpItems();
    }, [empitem.length]);

    function listEmpItems() {
        const employee = JSON.parse(localStorage.getItem('employee'));
        const employeeId = employee["employeeId"];
        getAllEmpItems(employeeId).then((response) => {
            console.log("Success");
            setItems(response.data);
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
                    <th>Item ID</th>
                    <th>Description</th>
                    <th>Issue Status</th>
                    <th>Item Value</th>
                    <th>Item Make</th>
                    <th>Item Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empitem.map(Eitem => 
                            <tr key={Eitem.pid}>
                                <td>{Eitem.pid}</td>
                                <td>{Eitem.itemDescription}</td>
                                <td>{Eitem.itemStatus}</td>
                                <td>{Eitem.itemValue}</td>
                                <td>{Eitem.itemMake}</td>
                                <td>{Eitem.itemCategory}</td>
                                

                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ViewItem;