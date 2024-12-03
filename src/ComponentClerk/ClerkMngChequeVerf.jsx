import React from 'react'
import Table from 'react-bootstrap/Table';
import './ClerkMngVerf.css';
function ClerkMngChequeVerf() {
    return (
        <>
            <div className='clerk-mng-style'>
                {/*  clerk manage loan header */}
                <div className='mng-clerk-header'>
                    <br></br>
                    <span id='mng-clerk-head1' className='mng-clerk-head'>MANAGE</span> <span id='mng-clerk-head2' className='mng-clerk-head'>CHEQUE</span><br></br>
                    <center>
                        <button id='mng-clerk-btn2' className='mng-clerk-btn'>Cheque request</button>
                        <button id='mng-clerk-btn1' className='mng-clerk-btn'>Verified Cheque</button>
                    </center>
                </div>
                <br></br><br></br>
                {/* clerk manage loan table */}
                <div className='mng-clerk-body'>
                    <span id='mng-clerk-viewr'>View Details</span>
                    <input xs="auto" id='mng-clerk-search'
                        type="text"
                        placeholder="Search Here..."
                        className="form-control"></input>
                    
                    <div className='container-fluid'>
                        <br></br>
                        <Table border={3} className='mng-clerk-table'>
                            <thead >
                                <tr>
                                    <th id='mng-clerk-tableh'>S No</th>
                                    <th id='mng-clerk-tableh'>Name</th>
                                    <th id='mng-clerk-tableh'>Date</th>
                                    <th id='mng-clerk-tableh'>Payee</th>
                                    <th id='mng-clerk-tableh'>Payee Acc No</th>
                                    <th id='mng-clerk-tableh'>Amount</th>
                                    <th id='mng-clerk-tableh'>Check Image</th>
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
                                    
                                </tr>
                                <tr>
                                    <td>2.</td>
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
                                    
                                </tr>
                                <tr>
                                    <td>4.</td>
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

export default ClerkMngChequeVerf