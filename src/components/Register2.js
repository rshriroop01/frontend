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
    if(fieldname.trim() === "")
      return true;
    return false;
  }

  // useEffect(() => {
  //   if (employeeName) {
      
  //         setEmployeeName(employeeName);
          
       

  // }, [employeeName]);

  const handleRegister = async (event) => {
    event.preventDefault();
    let frontEndErrors = false;
    if (password !== password2) {
      setFormErrors({password2: "Passwords don't match"});
      frontEndErrors = true;
    }

    if(employeeName.trim() === ""){
      setFormErrors({employeeName: "Please enter your employee name!"});
      console.log("Employee Name is empty")
      frontEndErrors = true;
    }
    
    
    

    if(email.trim() === ""){
      setFormErrors({email: "Please enter your email address!"});
      console.log("Email is empty")
      frontEndErrors = true;
    }

    if(password.trim() === ""){
      setFormErrors({password: "Please enter your password!"});
      frontEndErrors = true;
    }

    if(designation.trim() === ""){
      setFormErrors({designation: "Please enter your designation!"});
      frontEndErrors = true;
    }

    if(department.trim() === ""){
      setFormErrors({department: "Please enter your designation!"});
      frontEndErrors = true;
    }

    if(gender.trim() === ""){
      setFormErrors({gender: "Please enter your gender!"});
      frontEndErrors = true;
    }

    // if(gender != "Male" || gender != "Female"){
    //   setFormErrors({gender: "PLEASE DO NOT TAMPER WITH THE FORM. ENTER ONLY MALE OR FEMALE FOR Gender"})
    // }
    console.log(formErrors);


    // if(isEmpty())
    
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
          error={formErrors.employeeName} stateVariable={employeeName} stateFunction={setEmployeeName} />
        <InputField
          name="email" label="Email address"
          error={formErrors.email} stateVariable={email} stateFunction={setEmail}/>
        <InputField
          name="password" label="Password" type="password"
          error={formErrors.password} stateVariable={password} stateFunction={setPassword}  />
        <InputField
          name="password2" label="Password again" type="password"
          error={formErrors.password2} stateVariable={password2} stateFunction={setPassword2} />
        <InputField
          name="designation" label="Designation"
          error={formErrors.designation} stateVariable={designation} stateFunction={setDesignation} />
        <InputField
          name="department" label="Department"
          error={formErrors.department} stateVariable={department} stateFunction={setDepartment} />
        <label>
            Gender:
            <select name="gender" className="InputField container" defaultValue={"Male"} onChange={(e)=>{
                setGender(e.target.value);
            }}>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
        </label>
        
        <InputField type="date" label="DOB" 
            error={formErrors.DOB} stateVariable={dob} stateFunction={setDob} />
        <InputField type="date" label="DOJ" 
            error={formErrors.DOJ} stateVariable={doj} stateFunction={setDoj} />
        <br />
        <Button variant="primary" type="submit">Register</Button>
        <br />
        <br />
      </Form>
    </div> 
  );
}


