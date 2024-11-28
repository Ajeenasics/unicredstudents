import React from 'react'
import managerDashboardPieChartimg from "../Asserts/Frame 2000.png"
import managerDashboardPieChartDetailsimg from "../Asserts/color.png"
import managerDashboardPieChart1img from "../Asserts/Group 8.png"
import managerDashboardPieChartDetails1img from "../Asserts/Frame 18.png"
import Button from 'react-bootstrap/Button';
import { IoEye } from "react-icons/io5";
import "./ManagerDashboard.css"

function ManagerDashboard() {
  return (
    <div  className='managerDashboardfullbody'>
                <h3 className='managerdashboard'><span id='managerDashboardclerkcolor'>MANAGER</span>DASHBOARD</h3>

    <div>
    <div className='row'>
            <div className='col managerDashboardpiechart'>
                <h5>Users Review</h5>
                <img src={managerDashboardPieChartimg} alt="PieChart" className='managerDashboardpiechartimg'  />
                <img src={managerDashboardPieChartDetailsimg} alt="Details" className='managerDashboardpiechartdetails' />

            </div> 

        
            <div className='col managerDashboardpiechart1'>
                <div className='row'>
                    <div className='col'>
                    <Button id='managerDashboardclerkLoanButton'>Loan</Button>
                    </div>
                    <div className='col'>
                    <Button id='managerDashboardclerkCreditcardButton'>Credit Card</Button>
                    </div>
                    <div className='col'>
                    <Button id='managerDashboardclerkLifeinduranceButton'>Life Insurance</Button>
                    </div>
                </div>
                <div className='row'>
            <div className='col'>
                <img src={managerDashboardPieChart1img} alt="PieChart" className='managerDashboardpiechartimg' />
                <img src={managerDashboardPieChartDetails1img} alt="Details" className='managerDashboardpiechartdetails' />
            </div> 
            </div>
            </div>                        
        </div>

        <div className='col managerDashboardviewuser'>
            <h4>View Users</h4>
        </div>
        {/* table start */}
        <div>
        <table id='managerDashBoardTable'>
                        <tr>
                            <th className='managerDashboardTableHead'>S No</th>
                            <th className='managerDashboardTableHead'>Name</th>
                            <th className='managerDashboardTableHead'>Phone Number</th>
                            <th className='managerDashboardTableHead'>Account No</th>
                            <th className='managerDashboardTableHead'>IFSC Code</th>
                            <th className='managerDashboardTableHead'>Balance</th>
                            <th className='managerDashboardTableHead'>Transaction History</th>
                            <th className='managerDashboardTableHead'>Action</th>
                        </tr>
                        <tr>
                            <td className='managerDashboardTableData'>1.</td>
                            <td className='managerDashboardTableData'>Akhila <br /> <span className='managerDashboardsubline'>akhila123@gmail.com</span></td>
                            <td className='managerDashboardTableData'>1234567890</td>
                            <td className='managerDashboardTableData'>1234 1234 1224</td>
                            <td className='managerDashboardTableData'>AD1234H67</td>
                            <td className='managerDashboardTableData'>$25,000/-</td>
                            <td><a href="" className='managerDashboardTableDataviewDetails '>View Details</a>  </td>
                            <td className='managerDashboardTableData'><span id='managerDashboardeyeicon'><IoEye /></span></td>

                        </tr>
                        <tr className='managerDashboardrowclr'>
                            <td className='managerDashboardTableData'>2.</td>
                            <td className='managerDashboardTableData'>Prajash <br /> <span className='managerDashboardsubline'>prajash@gmail.com</span></td>
                            <td className='managerDashboardTableData'>1234567890</td>
                            <td className='managerDashboardTableData'>1234 1234 1224</td>
                            <td className='managerDashboardTableData'>AD1234H67</td>
                            <td className='managerDashboardTableData'>$25,000/-</td>
                            <td><a href="" className='managerDashboardTableDataviewDetails'>View Details</a>  </td>
                            <td className='managerDashboardTableData'><span id='managerDashboardeyeicon'><IoEye /></span></td>

                        </tr>
                        
                    </table>
        </div>
        <br /> <br />
        <div className='row'>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'></div>
            <div className='col'>
            <p><a href="" id='managerDashboardViewwallLink'>View All</a></p>

            </div>
        </div>
 </div>

</div>
  )
}

export default ManagerDashboard