import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, Button, FormGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function ApplyLoan() {
  const [itemDescription, setItemDescription] = useState('')
  const [itemValue, setitemValue] = useState('')
  const [itemId, setitemId] = useState('')
  const [itemMake, setitemMake] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [formErrors, setFormErrors] = useState({})
  const [availableItems, setAvailableItems] = useState([]);
  const [itemDictionary, setItemDictionary] = useState({});
  const [durationInYears, setDurationInYears] = useState(0);
  const [loanType, setLoanType] = useState("");

  
  const navigate = useNavigate()

  const ADD_LOAN_API = "http://localhost:8085/loanEzz/api/apply-loan"
  const GET_ITEMS_API = "http://localhost:8085/loanEzz/api/products"
  const Category = ["Furniture", "Vehicle", "Electronics"];
  const getAllItems = () => {
    axios.get(GET_ITEMS_API).then((res) => {
      if (res.status == 200) {
        let results = res.data;
        setAvailableItems(results);
        let itemDict = {};
        for (let i = 0; i < results.length; i++) {
          if(!itemDict[results[i]["itemCategory"]]) {
            itemDict[results[i]["itemCategory"]] = [];
          }
          itemDict[results[i]["itemCategory"]].push(results[i]["itemMake"]);
        }
        setItemDictionary(itemDict);
      }
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const getFilteredItems = () => {
    if (itemCategory !== "" && itemMake !== "") {
      let filteredItems = availableItems.filter(item => item["itemCategory"] == itemCategory && item["itemMake"] == itemMake);
      return filteredItems;
    }
    return [];
  }

  const getItemCategories = () => {
    let categories = availableItems.map(item => item["itemCategory"]);
    return categories.filter((item, index) => categories.indexOf(item) == index);
  }

  const getItemMake = () => {
    if (itemCategory !== "") {
      let val = itemDictionary[itemCategory];
      return val.filter((item, index) => val.indexOf(item) == index);
    }
    return [];
  }

  const getItem = (itemCategory, itemDescription, itemMake) => {
    for(let i = 0; i < availableItems.length; i++) {
      if(availableItems[i]["itemCategory"] == itemCategory && availableItems[i]["itemDescription"] == itemDescription && availableItems[i]["itemMake"] == itemMake) {
        return availableItems[i];
      }
    }
    return null;
  }

  const getItemDescription = () => {
    return (getFilteredItems().map(item => item["itemDescription"]));
  }

  const applyLoan = async (event) => {
    event.preventDefault();
    const employee = JSON.parse(localStorage.getItem('employee'));
    let eId = Number(employee["employeeId"]);
    let reqItem = getItem(itemCategory, itemDescription, itemMake);
    if(!reqItem) {
      return;
    }
    const loan = {
      "employeeId": eId,
      "itemDescription": itemDescription,
      "itemValue": reqItem["itemValue"],
      "itemId": reqItem["pid"],
      "itemMake": itemMake,
      "itemCategory": itemCategory,
      "formErrors": formErrors
    };

    const resp = await axios.post(ADD_LOAN_API, loan);

    if (resp.status == 200) {
      navigate('/purchase-items');
      console.log(resp.data);
      console.log("success");

    }
    else {
      console.log("adding loan failed!!");
    }


  }

  return (


    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 '>
          <h2 className='text-center h2 mt-4'>Add a Loan card</h2>
          <div className='card-body'>
            <Form onSubmit={applyLoan}>
              <div className="form-group mb-2">
                <label>
                  Item Category
                  <div style={{
                    display: 'block',
                    width: 700,
                    padding: 10
                  }}>

                    <Dropdown val>
                      <Dropdown.Toggle variant="outline-dark">
                        {itemCategory === "" ? "Open Menu": itemCategory}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {
                          getItemCategories().length > 0 && getItemCategories().map((category, key) => (
                            
                            <Dropdown.Item onClick={() => {
                              console.log(category)
                              console.log(itemDictionary)
                              setItemCategory(category)
                              }} key={key}>
                              {category}
                            </Dropdown.Item>
                            
                          ))
                        }
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </label>
              </div>
              {/* 
              <InputField
                name="itemStatus" label="Issue Status" type="text"
                error={formErrors.itemStatus} stateVariable={itemStatus} stateFunction={setItemStatus} />
               */}
              <div className='form-group mb-2' style={{ pointerEvents: itemCategory !== "" ? "auto" : "none" }}>
                <label className='form-label'>Item Make</label>
                {/* <input
                  type='text'
                  className='form-control'
                  placeholder='Enter loan Type'
                  name='loanType'
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                >
                </input> */}
                <div style={{
                  display: 'block',
                  width: 700,
                  padding: 10
                }}>

                  <Dropdown>
                    <Dropdown.Toggle variant="outline-dark">
                    {itemMake === "" ? "Open Menu": itemMake}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {getItemMake().length > 0 && getItemMake().map((item, key) => (
                        <Dropdown.Item key={key} onClick={(e) => setitemMake(item)} href="#">
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

              </div>

              <div className='form-group mb-2' style={{ pointerEvents: itemMake !== "" && itemCategory !== "" ? "auto" : "none" }}>
                <label className='form-label'>Item Description</label>
                {/* <input
                  type='text'
                  className='form-control'
                  placeholder='Enter loan Type'
                  name='loanType'
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                >
                </input> */}
                <div style={{
                  display: 'block',
                  width: 700,
                  padding: 10
                }}>

                  <Dropdown>
                    <Dropdown.Toggle variant="outline-dark">
                    {itemDescription === "" ? "Open Menu": itemDescription}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {
                        getItemDescription().length > 0 && getItemDescription().map((name, key) => (
                          <Dropdown.Item key={key} onClick={(e) => setItemDescription(name)} href="#">
                            {name}
                          </Dropdown.Item>
                        ))
                      }
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

              </div>



              <br />
              <Button variant="primary" type="submit">Apply Loan</Button>

            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}