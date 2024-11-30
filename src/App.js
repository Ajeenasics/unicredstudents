//import logo from './logo.svg';
import './App.css';

//import Custcreditapply from './Components/Custcreditapply';
//import Custcreditapplystatus from './Components/Custcreditapplystatus';
import Custloanapply from './Components/Custloanapply';
// import Custloanapplystatus from './Components/Custloanapplystatus';
import CustLoanDetails from './Component/CustLoanDetails';
import CustomerLoanIdentity from './Component/CustomerLoanIdentity';
import CustLoanEmplDetails from './Component/CustLoanEmplDetails';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Custloanappdetail from './Componentcust/Custloanappdetail';
import Custcreditcarddetails from './Componentcust/Custcreditcarddetails';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/Custloanappdetail' element={<Custloanappdetail/>}/>
      <Route path='/creditcard' element={<Custcreditcarddetails/>}/>

    </Routes>
     </BrowserRouter>
  );
}

export default App;
