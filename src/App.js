
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Custloanappdetail from './Componentcust/Custloanappdetail';
import Custcreditcarddetails from './Componentcust/Custcreditcarddetails';
import ClerkDashboard from './Components/Clerk/ClerkDashboard';
import ManagerDashboard from './Components/Manager/ManagerDashboard';
import CustomerLifeInsurancePolicyNominee from './Component/CustomerLifeInsurancePolicyNominee';
import CustLoanDetails from './Component/CustLoanDetails';
import Custloanapply from './Components/Custloanapply';
import Custloanapplystatus from './Components/Custloanapplystatus';
import Custcreditapply from './Components/Custcreditapply';
import Custcreditapplystatus from './Components/Custcreditapplystatus';
import CustLoanEmplDetails from './Component/CustLoanEmplDetails';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/Custloanappdetail' element={<Custloanappdetail/>}/>
      <Route path='/creditcard' element={<Custcreditcarddetails/>}/>
      <Route path='/clerkdashboard' element={<ClerkDashboard/>}/>
      <Route path='/managerdashboard' element={<ManagerDashboard/>}/>
      <Route path='/CustomerLifeInsurancePolicyNominee' element={<CustomerLifeInsurancePolicyNominee/>}/>
      <Route path='/CustLoanDetails' element={<CustLoanDetails/>}/>
      <Route path='/Custloanapply' element={<Custloanapply/>}/>
      <Route path='/Custloanapplystatus' element={<Custloanapplystatus/>}/>
      <Route path='/Custcreditapply' element={<Custcreditapply/>}/>
      <Route path='/Custcreditapplystatus' element={<Custcreditapplystatus/>}/>
      <Route path='/CustLoanEmplDetails' element={<CustLoanEmplDetails/>}/>






      





    </Routes>
     </BrowserRouter>
    









      


    
  );
}

export default App;
