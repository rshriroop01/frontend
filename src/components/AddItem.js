import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button, FormGroup } from 'react-bootstrap'

function AddItem() {
  const [itemDescription, setItemDescription] = useState('')
  const [itemStatus, setItemStatus] = useState('')
  const [itemMake, setItemMake] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [itemValue, setItemValue] = useState(0)
  const [itemStatusError, setItemStatusError] = useState('');
  const [itemDescriptionError, setItemDescriptionError] = useState('');
  const [itemMakeError, setItemMakeError] = useState('');
  const [itemCategoryError, setItemCategoryError] = useState('');
  const [itemValueError, setItemValueError] = useState('');

  const navigate = useNavigate()
  const { itemId } = useParams()

  const [itemData, setItemData] = useState({});

  const ADD_ITEM_API = "http://localhost:8085/loanEzz/api/products";


  useEffect(() => {
    if (itemId) {
      axios.get('http://localhost:8085/loanEzz/api/products/' + itemId)
        .then(response => {
          setItemData(response.data);
          setItemCategory(response.data['itemCategory']);
          setItemDescription(response.data['itemDescription']);
          setItemMake(response.data['itemMake'])
          setItemValue(response.data['itemValue']);
          setItemStatus(response.data['itemStatus']);
        })
        .catch(error => {
          console.error("could not fetch the item data");
        })
    }

  }, [itemId]);

  const addItem = async (event) => {
    event.preventDefault();
    let frontEndErrors = false;
    if (itemStatus !== 'Y' && itemStatus !== 'N') {
      setItemStatusError("Item status must be 'Y' or 'N' ");
       frontEndErrors = true;
    }
    if(itemDescription.trim() == ""){
      setItemDescriptionError("Please enter item description!")
    }

    if(itemMake.trim() == ""){
      setItemMakeError("Please enter item make!")
    }

    if(itemCategory.trim() == ""){
      setItemCategoryError("Please enter item Category!")
    }

    if(!isNumeric(itemValue)){
      setItemValueError("Please a valid number for item value")
    }

    if(!frontEndErrors) {
      const item = {
        "itemDescription": itemDescription,
        "itemStatus": itemStatus,
        "itemMake": itemMake,
        "itemCategory": itemCategory,
        "itemValue": itemValue,
      };

      const resp = await axios.post(ADD_ITEM_API, item);

      if (resp.status == 200) {
        console.log(resp.data);
        console.log("success");
        navigate('/items');
      }
      else {
        console.log("register failed!!");
      }

    }
  }


  const updateItem = async (event) => {
    event.preventDefault();

    let frontEndErrors = false;
    if (itemStatus !== 'Y' && itemStatus !== 'N') {
      setItemStatusError("Item status must be 'Y' or 'N' ");
       frontEndErrors = true;
    }
    if(itemDescription.trim() == ""){
      setItemDescriptionError("Please enter item description!")
      frontEndErrors = true;
    }

    if(itemMake.trim() == ""){
      setItemMakeError("Please enter item make!")
      frontEndErrors = true;
    }

    if(itemCategory.trim() == ""){
      setItemCategoryError("Please enter item Category!")
      frontEndErrors = true;
    }

    if(!isNumeric(itemValue)){
      setItemValueError("Please a valid number for item value")
      frontEndErrors = true;
    }

    if(!frontEndErrors) {
      const item = {
        "itemDescription": itemDescription,
        "itemStatus": itemStatus,
        "itemMake": itemMake,
        "itemCategory": itemCategory,
        "itemValue": itemValue,
      };
  
  
  
      const resp = await axios.put(`http://localhost:8085/loanEzz/api/products/${itemId}`, item);
  
      if (resp.status == 200) {
        console.log(resp.data);
        console.log("successful update");
        navigate('/items');
      }
      else {
        console.log("Update Item failed!!");
      }
    }
    

  }

  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }


  function title() {
    if (itemId) {
      // fillDetails();
      return <h2 className='text-center h2 mt-4'>Update Item</h2>;
    }

    return <h2 className='text-center h2 mt-4'>Add a New Item</h2>;
  }

  function button() {
    if (!itemId) {
      return <Button variant="primary" type="submit">Add Item</Button>;
    }

    return <Button variant="primary" type="submit">Update Item</Button>
  }

  function submitType() {
    if (!itemId) {
      return <Form onSubmit={addItem} ></Form>;
    }

    return <Form onSubmit={updateItem} ></Form>;
  }

  function submitTypeClose() {
    
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 '>
          {title()}
          <div className='card-body'>
          <Form onSubmit={(e) => {
            if(!itemId) {
              addItem(e);
            } else {
              updateItem(e);
            }
          }}>
            <div className='form-group mb-2'>
              <label className='form-label'>Item Description</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Item Description'
                name='itemDescription'
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
              >
              </input>
              <span className='text-danger'>{itemDescriptionError}</span>

            </div>
            {/* 
              <InputField
                name="itemStatus" label="Issue Status" type="text"
                error={formErrors.itemStatus} stateVariable={itemStatus} stateFunction={setItemStatus} />
               */}
            <div className='form-group mb-2'>
              <label className='form-label'>Issue Status</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Issue Status'
                name='itemStatus'
                value={itemStatus}
                
                onChange={(e) => setItemStatus(e.target.value)}
              >
                
              </input>
              <span className='text-danger'>{itemStatusError}</span>
            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Item Make</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Item Make'
                name='itemMake'
                value={itemMake}
                onChange={(e) => setItemMake(e.target.value)}
              >
              </input>
              <span className='text-danger'>{itemMakeError}</span>

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Item Category</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Item Category'
                name='itemCategory'
                value={itemCategory}
                onChange={(e) => setItemCategory(e.target.value)}
              >
              </input>
              <span className='text-danger'>{itemCategoryError}</span>

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Item Value</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Item Value'
                name='itemValue'
                value={itemValue}
                onChange={(e) => setItemValue(e.target.value)}
              >
              </input>
              <span className='text-danger'>{itemValueError}</span>

            </div>
            <br />
            {/* <Button variant="primary" type="submit">Add Item</Button> */}
            {button()}

          </Form>
        </div>
      </div>
    </div>
    </div >
  )
}

export default AddItem;