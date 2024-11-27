//import logo from './logo.svg';
import './App.css';

//import Custcreditapply from './Components/Custcreditapply';
//import Custcreditapplystatus from './Components/Custcreditapplystatus';
import Custloanapply from './Components/Custloanapply';
// import Custloanapplystatus from './Components/Custloanapplystatus';
import CustLoanDetails from './Component/CustLoanDetails';
import CustomerLoanIdentity from './Component/CustomerLoanIdentity';
import CustLoanEmplDetails from './Component/CustLoanEmplDetails';


function App() {
  return (
    <div>

      <Custloanapply/>
      {/* <Custloanapplystatus/> */}
      {/* <Custcreditapply/> */}
      {/* <Custcreditapplystatus/> */}

      <CustLoanEmplDetails/>

    </div>
  );
}

export default App;
