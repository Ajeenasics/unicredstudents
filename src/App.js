import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ClerkDashboard from './Components/Clerk/ClerkDashboard';
import Custcreditapply from './Components/Custcreditapply';
import Custcreditapplystatus from './Components/Custcreditapplystatus';
import Custloanapply from './Components/Custloanapply';
import Custloanapplystatus from './Components/Custloanapplystatus';
import Custloanapply from './Components/Custloanapply';
import Custloanapplystatus from './Components/Custloanapplystatus';
import CustLoanDetails from './Component/CustLoanDetails';
import CustLoanDetails from './Component/CustLoanDetails';
import CustomerLoanIdentity from './Component/CustomerLoanIdentity';
import CustLoanEmplDetails from './Component/CustLoanEmplDetails';
import Custloanappdetail from './Componentcust/Custloanappdetail';
import Custcreditcarddetails from './Componentcust/Custcreditcarddetails';
import CustomerLoanIdentity from './Component/CustomerLoanIdentity';
import CustLoanEmplDetails from './Component/CustLoanEmplDetails';

import ClerkMngLoan from './ComponentClerk/ClerkMngLoan';
import ClerkMngLoanVerf from './ComponentClerk/ClerkMngLoanVerf';
import ClerkMngCreditCrd from './ComponentClerk/ClerkMngCreditCrd';
import ClerkMngCreditCrdVerf from './ComponentClerk/ClerkMngCreditCrdVerf';
import ClerkMngInsurance from './ComponentClerk/ClerkMngInsurance';
import ClerkMngInsuranceVerf from './ComponentClerk/ClerkMngInsuranceVer';
import ClerkMngCheque from './ComponentClerk/ClerkMngCheque';
import ClerkMngChequeVerf from './ComponentClerk/ClerkMngChequeVerf';
import ClerkMngTrans from './ComponentClerk/ClerkMngTrans';
import ClerkMngTransVerf from './ComponentClerk/ClerkMngTransVerf';
import ClerkViewUsers from './ComponentClerk/ClerkViewUsers';
import ClerkUserTransHistr from './ComponentClerk/ClerkUserTransHistr';
import ClerkDashboard from './Components/Clerk/ClerkDashboard';
import ManagerDashboard from './Components/Manager/ManagerDashboard';
import CustLoanDetails from './Component/CustLoanDetails';
import Custcreditapply from './Components/Custcreditapply';
import Custcreditapplystatus from './Components/Custcreditapplystatus';
import Custloanapply from './Components/Custloanapply';
import Custloanapplystatus from './Components/Custloanapplystatus';
import CustLoanDetails from './Component/CustLoanDetails';
import CustLoanDetails from './Component/CustLoanDetails';
// import CustomerLoanIdentity from './Component/CustomerLoanIdentity';
// import CustLoanEmplDetails from './Component/CustLoanEmplDetails';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Custloanappdetail from './Componentcust/Custloanappdetail';
import Custcreditcarddetails from './Componentcust/Custcreditcarddetails';
// import CustomerLoanIdentity from './Component/CustomerLoanIdentity';
import CustLoanEmplDetails from './Component/CustLoanEmplDetails';
// import CustCredDetails from './Component/CustCredDetails';
// import CustomerCredCardDetails from './Component/CustomerCredCardDetails';
// import CustomerLifeInsurancePersonal from './Component/CustomerLifeInsurancePersonal';
import CustomerLifeInsurancePolicyNominee from './Component/CustomerLifeInsurancePolicyNominee';
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
      <Route path='/CustLoanEmplDetails' element={<CustLoanEmplDetails/> }/>
      <Route path='/ClerkDashboard' element={<ClerkDashboard/>}/>
      <Route path='/CustomerLoanIdentity' element={<CustomerLoanIdentity/>}/>
      <Route path='/CustLoanEmplDetails' element={<CustLoanEmplDetails/>}/>
      <Route path='/ClerkMngLoan' element={<ClerkMngLoan/>}/>
      <Route path='/ClerkMngLoanVerf' element={<ClerkMngLoanVerf/>}/>
      <Route path='/ClerkMngCreditCrd' element={<ClerkMngCreditCrd/>}/>
      <Route path='/ClerkMngCreditCrdVerf' element={<ClerkMngCreditCrdVerf/>}/>
      <Route path='/ClerkMngInsurance' element={<ClerkMngInsurance/>}/>
      <Route path='/ClerkMngInsuranceVerf' element={<ClerkMngInsuranceVerf/>}/>
      <Route path='/ClerkMngCheque' element={<ClerkMngCheque/>}/>
      <Route path='/ClerkMngChequeVerf' element={<ClerkMngChequeVerf/>}/>
      <Route path='/ClerkMngTrans' element={<ClerkMngTrans/>}/>
      <Route path='/ClerkMngTransVerf' element={<ClerkMngTransVerf/>}/>
      <Route path='/ClerkViewUsers' element={<ClerkViewUsers/>}/>
      <Route path='/ClerkUserTransHistr' element={<ClerkUserTransHistr/>}/>
    </Routes>
     </BrowserRouter>
  );
}

export default App;
