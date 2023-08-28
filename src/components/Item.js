import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getAllItems } from '../service/ItemService';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Item = () => {

    const [items, setItems] = useState([]); 
    const navigate = useNavigate();

    const DELETE_ITEM_URL = "http://localhost:8085/loanEzz/api/products/";

    useEffect(() => {
        listItems();
    }, [items.length]);

    function listItems() {
        getAllItems().then((response) => {
            setItems(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewItem() {
        navigate('/addItem');
    }

    function updateItem(itemId) {
        navigate(`/updateItem/${itemId}`);
    }

    function deleteItem(itemId){
        axios.delete(DELETE_ITEM_URL+`${itemId}`).then((resp)=>{
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
            <h2 className="h2 text-center">Items</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Item ID</th>
                    <th>Description</th>
                    <th>Issue Status</th>
                    <th>Item Make</th>
                    <th>Item Category</th>
                    <th>Item Valuation</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => 
                            <tr key={item.pid}>
                                <td>{item.pid}</td>
                                <td>{item.itemDescription}</td>
                                <td>{item.itemStatus}</td>
                                <td>{item.itemMake}</td>
                                <td>{item.itemCategory}</td>
                                <td>{item.itemValue}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateItem(item.pid)}>Update</button>
                                    &nbsp;
                                    <button className='btn btn-danger' onClick={() => deleteItem(item.pid)}>Delete</button>
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Button variant="primary" onClick={addNewItem}>Add a New Item</Button>
        </div>
    )
}

export default Item