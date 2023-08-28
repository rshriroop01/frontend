import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getAllEmployees } from '../service/EmployeeService';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {

    const [employees, setEmployees] = useState([]); 
    const navigate = useNavigate();

    const DELETE_EMPLOYEE_URL = "http://localhost:8085/loanEzz/api/employee/";

    useEffect(() => {
        listEmployees();
    }, [employees.length]);

    function listEmployees() {
        getAllEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigate('/addEmployee');
    }

    function updateEmployee(employeeId) {
        navigate(`/updateEmployee/${employeeId}`);
    }

    function deleteEmployee(employeeId) {
        axios.delete(DELETE_EMPLOYEE_URL+`${employeeId}`).then((resp)=>{
            if(resp.status==200){
                console.log("Success");
            }
            else{
                console.log("Something is wrong!!");
            }
            console.log(resp.data);
            window.location.reload();
        }).catch((err)=>{
            console.log("Failure");
            console.log(err);
        });
    }

    return (
        <div className='container'>
            <h2 className="h2 text-center">Employee</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th>Gender</th>
                    <th>DoB</th>
                    <th>DoJ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(e => 
                            <tr key={e.employeeId}>
                                <td>{e.employeeId}</td>
                                <td>{e.employeeName}</td>
                                <td>{e.email}</td>
                                <td>{e.designation}</td>
                                <td>{e.department}</td>
                                <td>{e.gender}</td>
                                <td>{e.dob}</td>
                                <td>{e.doj}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(e.employeeId)}>Update</button>
                                    &nbsp;
                                    <button className='btn btn-danger' onClick={() => deleteEmployee(e.employeeId)}>Delete</button>
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Button variant="primary" onClick={addNewEmployee}>Add a New Employee</Button>
        </div>
    )
}

export default Employee;