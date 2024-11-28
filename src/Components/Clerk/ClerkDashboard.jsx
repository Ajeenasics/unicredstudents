import React from 'react'
import userReviewPieChart from "../Asserts/Frame 2000.png"
import userReviewPieChartDetails from "../Asserts/color.png"
import userReviewPieChart1 from "../Asserts/Group 8.png"
import userReviewPieChartDetails1 from "../Asserts/Frame 18.png"
import Button from 'react-bootstrap/Button';
import { IoEye } from "react-icons/io5";
import "./ClerkDashboard.css"


function ClerkDashboard() {
  return (
    <div className='fullbody'>
        <h3 className='clerkdashboard'><span id='clerkcolor'>CLERK</span>DASHBOARD</h3>
    <div>
        <div className='row'>
            <div className='col piechart'>
                <h5>Users Review</h5>
                <img src={userReviewPieChart} alt="PieChart" className='piechartimg'  />
                <img src={userReviewPieChartDetails} alt="Details" className='piechartdetails' />

            </div> 

        
            <div className='col piechart1'>
                <div className='row'>
                    <div className='col'>
                    <Button id='clerkLoanButton'>Loan</Button>
                    </div>
                    <div className='col'>
                    <Button id='clerkCreditcardButton'>Credit Card</Button>
                    </div>
                    <div className='col'>
                    <Button id='clerkLifeinduranceButton'>Life Insurance</Button>
                    </div>
                </div>
                <div className='row'>
            <div className='col'>
                <img src={userReviewPieChart1} alt="PieChart" className='piechartimg' />
                <img src={userReviewPieChartDetails1} alt="Details" className='piechartdetails' />
            </div> 
            </div>
            </div>                        

        </div>
        <div className='col viewuser'>
            <h4>View Users</h4>
        </div>
        {/* table start */}
        <div>
        <table>
                        <tr>
                            <th>S No</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Account No</th>
                            <th>IFSC Code</th>
                            <th>Balance</th>
                            <th>Transaction History</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Akhila <br /> <span className='subline'>akhila123@gmail.com</span></td>
                            <td>1234567890</td>
                            <td>1234 1234 1224</td>
                            <td>AD1234H67</td>
                            <td>$25,000/-</td>
                            <td><a href="" className='viewDetails'>View Details</a>  </td>
                            <td><span id='eyeicon'><IoEye /></span></td>

                        </tr>
                        <tr className='rowclr'>
                            <td>2.</td>
                            <td>Prajash <br /> <span className='subline'>prajash@gmail.com</span></td>
                            <td>1234567890</td>
                            <td>1234 1234 1224</td>
                            <td>AD1234H67</td>
                            <td>$25,000/-</td>
                            <td><a href="" className='viewDetails'>View Details</a>  </td>
                            <td><span id='eyeicon'><IoEye /></span></td>

                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Vimal <br /> <span className='subline'>vimal123@gmail.com</span></td>
                            <td>1234567890</td>
                            <td>1234 1234 1224</td>
                            <td>AD1234H67</td>
                            <td>$25,000/-</td>
                            <td><a href="" className='viewDetails'>View Details</a>  </td>
                            <td><span id='eyeicon'><IoEye /></span></td>

                        </tr>
                        <tr className='rowclr'>
                            <td>4.</td>
                            <td>Anushia <br /> <span className='subline'>anushia@gmail.com</span></td>
                            <td>1234567890</td>
                            <td>1234 1234 1224</td>
                            <td>AD1234H67</td>
                            <td>$25,000/-</td>
                            <td><a href="" className='viewDetails'>View Details</a>  </td>
                            <td><span id='eyeicon'><IoEye /></span></td>

                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Akhila <br /> <span className='subline'>akhila123@gmail.com</span></td>
                            <td>1234567890</td>
                            <td>1234 1234 1224</td>
                            <td>AD1234H67</td>
                            <td>$25,000/-</td>
                            <td><a href="" className='viewDetails'>View Details</a>  </td>
                            <td><span id='eyeicon'><IoEye /></span></td>

                        </tr>
                        <tr className='rowclr'>
                            <td>6.</td>
                            <td>Prajash <br /> <span className='subline'>prajash@gmail.com</span></td>
                            <td>1234567890</td>
                            <td>1234 1234 1224</td>
                            <td>AD1234H67</td>
                            <td>$25,000/-</td>
                            <td><a href="" className='viewDetails'>View Details</a>  </td>
                            <td><span id='eyeicon'><IoEye /></span></td>

                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Vimal <br /> <span className='subline'>vimal123@gmail.com</span></td>
                            <td>1234567890</td>
                            <td>1234 1234 1224</td>
                            <td>AD1234H67</td>
                            <td>$25,000/-</td>
                            <td><a href="" className='viewDetails'>View Details</a>  </td>
                            <td><span id='eyeicon'><IoEye /></span></td>

                        </tr>
                    </table>
        </div>
    </div>    
    </div>
  )
}

export default ClerkDashboard