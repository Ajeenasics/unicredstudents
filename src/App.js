
import './App.css';

=======
import ClerkDashboard from './Components/Clerk/ClerkDashboard';

//import Custcreditapply from './Components/Custcreditapply';
//import Custcreditapplystatus from './Components/Custcreditapplystatus';
// import Custloanapply from './Components/Custloanapply';
// import Custloanapplystatus from './Components/Custloanapplystatus';

// import CustLoanDetails from './Component/CustLoanDetails';


import CustLoanDetails from './Component/CustLoanDetails';

// import CustomerLoanIdentity from './Component/CustomerLoanIdentity';
// import CustLoanEmplDetails from './Component/CustLoanEmplDetails';

function App() {
  return (
    <div>
      <CustLoanDetails
      />



      {/* <Custloanapply/> */}
      {/* <Custloanapplystatus/> */}
      {/* <Custcreditapply/> */}
      {/* <Custcreditapplystatus/> */}

      {/* <CustLoanEmplDetails/> */}


      <ClerkDashboard/>


    </div>
  );
}

export default App;
