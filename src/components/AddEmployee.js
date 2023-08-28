import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button, FormGroup } from 'react-bootstrap'

function AddItem() {
//   const [employeeId, setEmployeeId] = useState('')
  const [employeeName, setEmployeeName] = useState('')
  const [email, setEmail] = useState('')
  const [designation, setDesignation] = useState('')
  const [department, setDepartment] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [doj, setDoj] = useState('')
  const [password, setPassword] = useState("password");


    const [employeeNameError, setEmployeeNameError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [departmentError, setDepartmentError] = useState("");
    const [designationError, setDesignationError] = useState("");
    const [dobError, setDobError] = useState("");
    const [dojError, setDojError] = useState("");


  const [formErrors, setFormErrors] = useState({})
  const navigate = useNavigate()
  const { employeeId } = useParams()

  const ADD_EMPLOYEE_URL = "http://localhost:8085/loanEzz/api/employee/";


//   const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    if (employeeId) {
      axios.get('http://localhost:8085/loanEzz/api/employee/' + employeeId)
        .then(response => {
        //   setData(response.data);
          setEmployeeName(response.data['employeeName']);
          setEmail(response.data['email']);
          setDesignation(response.data['designation'])
          setDepartment(response.data['department']);
          setGender(response.data['gender']);
          setDob(response.data['dob']);
          setDoj(response.data['doj']);
        })
        .catch(error => {
          console.error("could not fetch the employee data");
        })
    }

  }, [employeeId]);

  const addEmployee = async (event) => {
    let frontEndErrors = false;
    event.preventDefault();

    if(employeeName.trim() === ""){
      frontEndErrors = true;
      setEmployeeNameError("Please enter your employee name!");
    }

    

    if(email.trim() == ""){
      frontEndErrors = true;
      setEmailError("Please enter your email address!")
    }

  

    if(designation.trim() == ""){
      frontEndErrors = true;
      setDesignationError( "Please enter your designation!")
    }

    if(department.trim() == ""){
      frontEndErrors = true;
      setDepartmentError( "Please enter your department!")
    }


    if(dob.trim() == ""){
      frontEndErrors = true;
      setDobError("Please enter your dob!")
    }

    if(doj.trim() == ""){
      frontEndErrors = true;
      setDojError("Please enter your doj!")
    }

    if (gender !== "M" && gender !== "F") {
      setGenderError( "Gender must be M or F");
      frontEndErrors = true;

      console.log("Input assertion error, enter M or F")
    }

    if(email.trim() == ""){
      // frontEndErrors = true;
      setEmailError("Please enter your email address!")
      return;
      
    }

    const validRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

  if (!validRegex.test(email)) {

    setEmailError("Invalid Email format!")
    console.log("Regex mixmatch");
    return;
  }
  else{
    console.log("Valid");
  }
  
    if(!frontEndErrors) {
      const employee = {
        "employeeName": employeeName,
        "email": email,
        "designation": designation,
        "department": department,
        "gender": gender,
        "dob": dob,
        "doj": doj,
        "password": password
      };

      const resp = await axios.post("http://localhost:8085/loanEzz/api/register", employee);

      if (resp.status == 200) {
        console.log(resp.data);
        console.log("success");
        navigate('/employees');
      }
      else {
        console.log("register failed!!");
      }

    }
  }


  const updateEmployee = async (event) => {
    event.preventDefault();

    const employee = {
        "employeeName": employeeName,
        "email": email,
        "designation": designation,
        "department": department,
        "gender": gender,
        "dob": dob,
        "doj": doj
    };

    const resp = await axios.put(`http://localhost:8085/loanEzz/api/employee/${employeeId}`, employee);

    if (resp.status == 200) {
      console.log(resp.data);
      console.log("successful update");
      navigate('/employees');
    } 
    else {
      console.log("Update employee has failed!!");
    }

  }


  function title() {
    if (employeeId) {
      // fillDetails();
      return <h2 className='text-center h2 mt-4'>Update Employee</h2>;
    }

    return <h2 className='text-center h2 mt-4'>Add a New Employee</h2>;
  }

  function button() {
    if (!employeeId) {
      return <Button variant="primary" type="submit">Add Employee</Button>;
    }

    return <Button variant="primary" type="submit">Update Employee</Button>
  }

  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  function submitType() {
    if (!employeeId) {
      return <Form onSubmit={addEmployee} ></Form>;
    }

    return <Form onSubmit={updateEmployee} ></Form>;
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
            if(!employeeId) {
              addEmployee(e);
            } else {
              updateEmployee(e);
            }
          }}>
            <div className='form-group mb-2'>
              <label className='form-label'>Employee Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Employee Name'
                name='employeeName'
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              >
              </input>
              <span className='text-danger'>{employeeNameError}</span>

            </div>
            {/* 
              <InputField
                name="itemStatus" label="Issue Status" type="text"
                error={formErrors.itemStatus} stateVariable={itemStatus} stateFunction={setItemStatus} />
               */}
            <div className='form-group mb-2'>
              <label className='form-label'>Email</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
              </input>
              <span className='text-danger'>{emailError}</span>

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Designation</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Designation'
                name='designation'
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              >
              </input>
              <span className='text-danger'>{designationError}</span>

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Department</label>
              <input
                type='text'
                className='form-control'
                placeholder='Department'
                name='department'
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
              </input>
              <span className='text-danger'>{departmentError}</span>

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>Gender</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Gender'
                name='gender'
                error={formErrors.gender}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
              </input>
              <span className='text-danger'>{genderError}</span>

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>DoB</label>
              <input
                type='date'
                className='form-control'
                placeholder='Enter DoB'
                name='dob'
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              >
              </input>
              <span className='text-danger'>{dobError}</span>

            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>DoJ</label>
              <input
                type='date'
                className='form-control'
                placeholder='Enter DoJ'
                name='doj'
                value={doj}
                onChange={(e) => setDoj(e.target.value)}
              >
              </input>
              <span className='text-danger'>{dojError}</span>

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