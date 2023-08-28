import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, Button, FormGroup } from 'react-bootstrap'

function AddLoan() {
  const [loanId, setLoanId] = useState('')
  const [durationInYears, setDurationInYears] = useState('')
  const [loanType, setLoanType] = useState('')
  const [formErrors, setFormErrors] = useState({})
  const navigate = useNavigate()

  const ADD_LOAN_API = "http://localhost:8085/loanEzz/api/loancard"

  const addLoan = async (event) => {
    event.preventDefault();
    const loan = {
      "loanType": loanType,
      "durationInYears": durationInYears,
    };

    const resp = await axios.post(ADD_LOAN_API, loan);

    if (resp.status == 200) {
      navigate('/loans');
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
            <Form onSubmit={addLoan}>
              <div className='form-group mb-2'>
                <label className='form-label'>Duration in years</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter duration in years'
                  name='durationInYears,'
                  value={durationInYears}
                  onChange={(e) => setDurationInYears(e.target.value)}
                >
                </input>
              </div>
              {/* 
              <InputField
                name="itemStatus" label="Issue Status" type="text"
                error={formErrors.itemStatus} stateVariable={itemStatus} stateFunction={setItemStatus} />
               */}
              <div className='form-group mb-2'>
                <label className='form-label'>Loan Type</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter loan Type'
                  name='loanType'
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                >
                </input>
              </div>

              
              <br />
              <Button variant="primary" type="submit">Add Loan</Button>

            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddLoan;