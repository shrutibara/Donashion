import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
// import SignUpForm from "./userManagement/signup";
// import PhoneLogin from "./phonelogin/phonelogin";
// import LoginForm from "./loginPage/login"; 
// import ForexRemittanceForm from './forex-remittance/ForexRemittance';
import MainPages from './components/dashboard/mainpage';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <> 
      <Router>
        <Routes>
          {/* Route for DisplayBeneficiary is removed */}
          {/* <Route path="/signup" element={<SignUpForm />}/>
          <Route path="/login" element={<LoginForm />}/> */}
          <Route path="/" element={<MainPages />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          {/* <Route path="/phonelogin" element={<PhoneLogin />} />
          <Route path='/ForexRemittance' element={<ForexRemittanceForm />}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
