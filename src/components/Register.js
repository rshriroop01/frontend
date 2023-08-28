import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';


// import Body from '../components/Body';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useApi } from '../contexts/ApiProvider';

export default function RegistrationPage() {
    const [formErrors, setFormErrors] = useState({});
  
    const [employeeName, setEmployeeName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [designation, setDesignation] = useState("");
    const [dob, setDob] = useState("");
    const [doj, setDoj] = useState("");


    const [employeeNameError, setEmployeeNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [password2Error, setPassword2Error] = useState("");
    const [genderError, setGenderError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [departmentError, setDepartmentError] = useState("");
    const [designationError, setDesignationError] = useState("");
    const [dobError, setDobError] = useState("");
    const [dojError, setDojError] = useState("");



    

    const REGISTER_API_URL = "http://localhost:8085/loanEzz/api/register";

  

//   const employeeNameField = useRef();
//   const DOB = useRef();
//   const DOJ= useRef();
//   const designation= useRef();
//   const department= useRef();
//   const gender= useRef();
//   const emailField = useRef();
//   const passwordField = useRef();
//   const password2Field = useRef();

  const navigate = useNavigate();
//   const api = useApi();

  function isEmpty(fieldname) {
    if(fieldname === "")
      return true;
    return false;
  }

  const handleRegister = async (event) => {
    
    event.preventDefault();
    event.stopPropagation();

    
    let frontEndErrors = false;
    if (password !== password2) {
      frontEndErrors = true;
      setPassword2Error( "Passwords don't match");
      
    }

    // if(password.length < 6){
    //   setPasswordError("Password must be atleast 6 characters")
    // }

    // var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // if(!format.test(password)){
    //   setPasswordError("Password must contain atleast one special character")
    // }

    if(employeeName.trim() === ""){
      frontEndErrors = true;
      setEmployeeNameError("Please enter your employee name!");
    }

    

    if(email.trim() == ""){
      frontEndErrors = true;
      setEmailError("Please enter your email address!")
    }

    if(password.trim() == ""){
      frontEndErrors = true;
      setPasswordError("Please enter your password!")
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
        const registerData = {
            "employeeName": employeeName,
            "email": email,
            "password": password,
            "designation": designation,
            "department": department,
            "gender": gender,
            "dob": dob,
            "doj": doj
        };

        const resp = await axios.post(REGISTER_API_URL, registerData);

        if(resp.status==200){
            console.log(resp.data);
            console.log("success");
            navigate('/login');
        }
        else{
            console.log("register failed!!");
        }

    }
  };

  
  return (
    <div className="form-container">
        
      <h1>Register</h1>
      <Form onSubmit={handleRegister}>
        <InputField
          name="employeeName" label="Employee Name"
          error={employeeNameError} stateVariable={employeeName} stateFunction={setEmployeeName} />
        <InputField
          name="email" label="Email address"
          error={emailError} stateVariable={email} stateFunction={setEmail} />
        <InputField
          name="password" label="Password" type="password"
          error={passwordError} stateVariable={password} stateFunction={setPassword} />
        <InputField
          name="password2" label="Password again" type="password"
          error={password2Error} stateVariable={password2} stateFunction={setPassword2} />
        <InputField
          name="designation" label="Designation"
          error={designationError} stateVariable={designation} stateFunction={setDesignation}/>
        <InputField
          name="department" label="Department"
          error={departmentError} stateVariable={department} stateFunction={setDepartment} />
        <label>
            Gender:
            <select name="gender" className="InputField container" defaultValue={"Male"} value={gender} onChange={(e)=>{
                setGender(e.target.value);
            }}>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
        </label>
        
        <InputField type="date" label="DOB" 
            error={dobError} stateVariable={dob} stateFunction={setDob} />
        <InputField type="date" label="DOJ" 
            error={dojError} stateVariable={doj} stateFunction={setDoj} />
        <br />
        <Button variant="primary" type="submit">Register</Button>
        <br />
        <br />
      </Form>
    </div> 
  );
}


