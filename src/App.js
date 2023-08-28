
import './App.css';

import Item from './components/Item';
import { Container, Stack } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddItem from './components/AddItem';
import UserLogin from './components/UserLogin';
import Register from './components/Register';
import Loans from './components/Loans';
import AdminDashboad from './components/AdminDashboad';
import AddLoan from './components/AddLoan';
import ApplyLoan from './components/ApplyLoan';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';

import ViewItem from './components/ViewItem';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Logout from './components/Logout';
import ViewLoan from './components/ViewLoan';
import UserDashboad from './components/UserDashboard';
import Navbar1 from './components/Navbar1';
import AboutUs from './components/AboutUs';
import { useState } from 'react';

/*
  React Router is a standard library for routing in React. 
  It enables the navigation among views of various components in a React Application, allows changing the browser URL, 
  and keeps the UI in sync with the URL. 
  React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. 
  It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. 
  It also allows us to use browser history features while preserving the right application view.

*/

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const setAdmin = (value) => {
    setIsAdmin(value);
  }
  return (
    <Container style={{padding: 0}} fluid className="App">

      <BrowserRouter>
        <Navbar1 loggedIn = {isLoggedIn} setLoggedIn = {setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}></Navbar1>
        <Stack direction='horizontal'>
          <SideBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/adminDashboard' element={<AdminDashboad loggedIn = {isLoggedIn} setLoggedIn = {setIsLoggedIn} />}> </Route>
            <Route path='/userDashboard' element={<UserDashboad loggedIn = {isLoggedIn} setLoggedIn = {setIsLoggedIn} />}> </Route>

            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<UserLogin loggedIn = {isLoggedIn} setLoggedIn = {setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setAdmin} />} />
            <Route path='/loans' element={<Loans />} />
            <Route path='/items' element={<Item />} />
            <Route path='/addItem' element={<AddItem />}></Route>
            <Route path='/addEmployee' element={<AddEmployee />}></Route>
            <Route path='/updateItem/:itemId' element={<AddItem />} />
            <Route path='/updateEmployee/:employeeId' element={<AddEmployee />} />
            <Route path='/addLoan' element={<AddLoan />} />
            <Route path='/applyLoan' element={<ApplyLoan />} />
            <Route path='/logout' element={<Logout setLoggedIn={setIsLoggedIn} />} />
            <Route path='/employees' element={<Employee />} />
            <Route path='/purchase-items' element={<ViewItem />} />
            <Route path='/purchased-loans' element={<ViewLoan  />} />
            <Route path='/about-us' element={<AboutUs  />} />
          </Routes>
        </Stack>

        <Footer />

      </BrowserRouter>
    </Container>
  );
}

export default App;
