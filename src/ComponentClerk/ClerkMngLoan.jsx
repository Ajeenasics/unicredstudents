import React from 'react'
import Table from 'react-bootstrap/Table';
import './ClerkMng.css';
function ClerkMngLoan() {
    return (
        <>
            <div className='clerk-mng-style'>
                {/*  clerk manage loan header */}
                <div className='mng-clerk-header'>
                    <br></br>
                    <span id='mng-clerk-head1' className='mng-clerk-head'>MANAGE</span> <span id='mng-clerk-head2' className='mng-clerk-head'>LOAN</span><br></br>
                    <center>
                        <button id='mng-clerk-btn1' className='mng-clerk-btn'>Application</button>
                        <button id='mng-clerk-btn2' className='mng-clerk-btn'>Verified Application</button>
                    </center>
                </div>
                <br></br>
                {/* clerk manage loan table */}
                <div className='mng-clerk-body'>
                    <span id='mng-clerk-viewr'>View Requests</span>
                    <input className='form-control' xs="auto" id='mng-clerk-search'
                        type="text"
                        placeholder="Search Here..."></input>
                    <br></br>
                    <div className='container-fluid'>
                        <Table border={3} className='mng-clerk-table'>
                            <thead>
                                <tr>
                                    <th id='mng-clerk-tableh'>S No</th>
                                    <th id='mng-clerk-tableh'>Profile</th>
                                    <th id='mng-clerk-tableh'>Name</th>
                                    <th id='mng-clerk-tableh'>Phone NO</th>
                                    <th id='mng-clerk-tableh'>Address</th>
                                    <th id='mng-clerk-tableh'>DOB</th>
                                    <th id='mng-clerk-tableh'>Loan type</th>
                                    <th id='mng-clerk-tableh'>Loan Amount</th>
                                    <th id='mng-clerk-tableh'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ClerkMngLoan