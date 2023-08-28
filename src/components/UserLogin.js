import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputField from '../components/InputField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

export default function UserLogin({loggedIn, setLoggedIn, isAdmin, setIsAdmin}) {
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const LOGIN_API_URL = "http://localhost:8085/loanEzz/api/login";

  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
      console.log("Error email");
      return;
    } else {
      console.log("B");
      setEmailError('Enter valid Email!')
    }
  }

  const handleLogin = async (ev) => {
    ev.preventDefault();




    const loginData = {
      "email": email,
      "password": password
    };

    if (email.trim() == "") {
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
    else {
      console.log("Valid");
    }

    if (password.trim() == "") {
      // frontEndErrors = true;
      setPasswordError("Please enter your password!")
      return;

    }

    axios.post(LOGIN_API_URL, loginData)
      .then((res) => {
        if (res.status == 200) {
          console.log("success");
          console.log(res.data);
          setLoggedIn(true);
          localStorage.setItem("employee", JSON.stringify(res.data));
          if (res.data.employeeId == 1) {
            localStorage.setItem("isAdmin", 'true');
            setIsAdmin(true);
            navigate('/adminDashboard')
          }
          else {
            setIsAdmin(false);
            localStorage.setItem("isAdmin", 'false');
            navigate('/userDashboard');
          }
        }
        else {
          setError('Invalid Username or Password')
          console.log("Error!");
        }
      })
      .catch(
        (err) => {
          console.log(err);
        }
      );



  };

  return (
    <div className='container'>
      <div className='form-container'>
        <h2 className='text-center'>Login</h2>
        <Form onSubmit={handleLogin}>
          <InputField
            name="email" label="Email Address"
            error={emailError} stateVariable={email} stateFunction={setEmail} onChange={(e) => validateEmail(e)} />
          <InputField
            name="password" label="Password" type="password"
            error={passwordError} stateVariable={password} stateFunction={setPassword} />
          <Button variant="primary" type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
}