import React from 'react'
import Table from 'react-bootstrap/Table';
import './ClerkView.css';
function ClerkViewUsers() {
    return (
        <>
            <div className='clerk-mng-style'>
                {/*  clerk manage loan header */}
                <div className='mng-clerk-header'>
                    <br></br>
                    <span id='mng-clerk-head1' className='mng-clerk-head'>VIEW</span> <span id='mng-clerk-head2' className='mng-clerk-head'>USERS</span><br></br>
                </div>
                <br></br>
                {/* clerk manage loan table */}
                <div className='mng-clerk-body'>
                    <span id='mng-clerk-viewr'>View Users</span>
                    <input xs="auto" id='mng-clerk-search' className='form-control'
                        type="text"
                        placeholder="Search Here..."
                    ></input> 
                    <button id='view-clerk-btn'>+ Add User</button>
                    <br></br>
                    <div className='container-fluid'>
                        <Table border={3} className='mng-clerk-table'>
                            <thead >
                                <tr>
                                    <th id='mng-clerk-tableh'>S No</th>
                                    <th id='mng-clerk-tableh'>Name</th>
                                    <th id='mng-clerk-tableh'>Phone Number</th>
                                    <th id='mng-clerk-tableh'>Account no</th>
                                    <th id='mng-clerk-tableh'>IFSC Code</th>
                                    <th id='mng-clerk-tableh'>Balance</th>
                                    <th id='mng-clerk-tableh'>Transaction History</th>
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

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ClerkViewUsers