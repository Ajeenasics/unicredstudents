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
    <div className='clerkDashboardfullbody'>
        <h3 className='clerkdashboard'><span id='clerkDashboardclerkcolor'>CLERK</span>DASHBOARD</h3>
    <div>
        <div className='row'>
            <div className='col clerkDashboardpiechart'>
                <h5>Users Review</h5>
                <img src={userReviewPieChart} alt="PieChart" className='clerkDashboardpiechartimg'  />
                <img src={userReviewPieChartDetails} alt="Details" className='clerkDashboardpiechartdetails' />

            </div> 

        
            <div className='col clerkDashboardpiechart1'>
                <div className='row'>
                    <div className='col'>
                    <Button id='clerkDashboardclerkLoanButton'>Loan</Button>
                    </div>
                    <div className='col'>
                    <Button id='clerkDashboardclerkCreditcardButton'>Credit Card</Button>
                    </div>
                    <div className='col'>
                    <Button id='clerkDashboardclerkLifeinduranceButton'>Life Insurance</Button>
                    </div>
                </div>
                <div className='row'>
            <div className='col'>
                <img src={userReviewPieChart1} alt="PieChart" className='clerkDashboardpiechartimg' />
                <img src={userReviewPieChartDetails1} alt="Details" className='clerkDashboardpiechartdetails' />
            </div> 
            </div>
            </div>                        

        </div>
        <div className='col clerkDashboardviewuser'>
            <h4>View Users</h4>
        </div>
        {/* table start */}
        <div>
        <table id='clerkDashBoardTable'>
                        <tr>
                            <th className='clerkDashboardTableHead'>S No</th>
                            <th className='clerkDashboardTableHead'>Name</th>
                            <th className='clerkDashboardTableHead'>Phone Number</th>
                            <th className='clerkDashboardTableHead'>Account No</th>
                            <th className='clerkDashboardTableHead'>IFSC Code</th>
                            <th className='clerkDashboardTableHead'>Balance</th>
                            <th className='clerkDashboardTableHead'>Transaction History</th>
                            <th className='clerkDashboardTableHead'>Action</th>
                        </tr>
                        <tr>
                            <td className='clerkDashboardTableData'>1.</td>
                            <td className='clerkDashboardTableData'>Akhila <br /> <span className='clerkDashboardsubline'>akhila123@gmail.com</span></td>
                            <td className='clerkDashboardTableData'>1234567890</td>
                            <td className='clerkDashboardTableData'>1234 1234 1224</td>
                            <td className='clerkDashboardTableData'>AD1234H67</td>
                            <td className='clerkDashboardTableData'>$25,000/-</td>
                            <td><a href="" className='clerkDashboardTableDataviewDetails '>View Details</a>  </td>
                            <td className='clerkDashboardTableData'><span id='clerkDashboardeyeicon'><IoEye /></span></td>

                        </tr>
                        <tr className='clerkDashboardrowclr'>
                            <td className='clerkDashboardTableData'>2.</td>
                            <td className='clerkDashboardTableData'>Prajash <br /> <span className='clerkDashboardsubline'>prajash@gmail.com</span></td>
                            <td className='clerkDashboardTableData'>1234567890</td>
                            <td className='clerkDashboardTableData'>1234 1234 1224</td>
                            <td className='clerkDashboardTableData'>AD1234H67</td>
                            <td className='clerkDashboardTableData'>$25,000/-</td>
                            <td><a href="" className='clerkDashboardTableDataviewDetails'>View Details</a>  </td>
                            <td className='clerkDashboardTableData'><span id='clerkDashboardeyeicon'><IoEye /></span></td>

                        </tr>
                        <tr>
                            <td  className='clerkDashboardTableData'>3.</td>
                            <td className='clerkDashboardTableData'>Vimal <br /> <span className='clerkDashboardsubline'>vimal123@gmail.com</span></td>
                            <td className='clerkDashboardTableData'>1234567890</td>
                            <td className='clerkDashboardTableData'>1234 1234 1224</td>
                            <td className='clerkDashboardTableData'>AD1234H67</td>
                            <td className='clerkDashboardTableData'>$25,000/-</td>
                            <td><a href="" className='clerkDashboardTableDataviewDetails '>View Details</a>  </td>
                            <td className='clerkDashboardTableData'><span id='clerkDashboardeyeicon'><IoEye /></span></td>

                        </tr>
                        <tr className='clerkDashboardrowclr'>
                            <td className='clerkDashboardTableData'>4.</td>
                            <td className='clerkDashboardTableData'>Anushia <br /> <span className='clerkDashboardsubline'>anushia@gmail.com</span></td>
                            <td className='clerkDashboardTableData'>1234567890</td>
                            <td className='clerkDashboardTableData'>1234 1234 1224</td>
                            <td className='clerkDashboardTableData'>AD1234H67</td>
                            <td className='clerkDashboardTableData'>$25,000/-</td>
                            <td><a href="" className='clerkDashboardTableDataviewDetails '>View Details</a>  </td>
                            <td className='clerkDashboardTableData'><span id='clerkDashboardeyeicon'><IoEye /></span></td>

                        </tr>
                        <tr>
                            <td className='clerkDashboardTableData'>5.</td>
                            <td className='clerkDashboardTableData'>Akhila <br /> <span className='clerkDashboardsubline'>akhila123@gmail.com</span></td>
                            <td className='clerkDashboardTableData'>1234567890</td>
                            <td className='clerkDashboardTableData'>1234 1234 1224</td>
                            <td className='clerkDashboardTableData'>AD1234H67</td>
                            <td className='clerkDashboardTableData'>$25,000/-</td>
                            <td><a href="" className='clerkDashboardTableDataviewDetails '>View Details</a>  </td>
                            <td className='clerkDashboardTableData'><span id='clerkDashboardeyeicon'><IoEye /></span></td>

                        </tr>
                        <tr className='clerkDashboardrowclr'>
                            <td className='clerkDashboardTableData'>6.</td>
                            <td className='clerkDashboardTableData'>Prajash <br /> <span className='clerkDashboardsubline'>prajash@gmail.com</span></td>
                            <td className='clerkDashboardTableData'>1234567890</td>
                            <td className='clerkDashboardTableData'>1234 1234 1224</td>
                            <td className='clerkDashboardTableData'>AD1234H67</td>
                            <td className='clerkDashboardTableData'>$25,000/-</td>
                            <td ><a href="" className='clerkDashboardTableDataviewDetails '>View Details</a>  </td>
                            <td className='clerkDashboardTableData'><span id='clerkDashboardeyeicon'><IoEye /></span></td>

                        </tr>
                        <tr>
                            <td className='clerkDashboardTableData'>7.</td>
                            <td className='clerkDashboardTableData'>Vimal <br /> <span className='clerkDashboardsubline'>vimal123@gmail.com</span></td>
                            <td className='clerkDashboardTableData'>1234567890</td>
                            <td className='clerkDashboardTableData'>1234 1234 1224</td>
                            <td className='clerkDashboardTableData'>AD1234H67</td>
                            <td className='clerkDashboardTableData'>$25,000/-</td>
                            <td><a href="" className='clerkDashboardTableDataviewDetails '>View Details</a>  </td>
                            <td className='clerkDashboardTableData'><span id='clerkDashboardeyeicon'><IoEye /></span></td>

                        </tr>
                    </table>
        </div>
    </div>    
    </div>
  )
}

export default ClerkDashboard