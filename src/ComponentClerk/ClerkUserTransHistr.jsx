import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ClerkUserTransHistr.css';
function ClerkUserTransHistr() {
    return (
        <>
            <div className='clerk-mng-style'>

                <div className='mng-clerk-header'>
                    <br></br>
                    <span id='mng-clerk-head1' className='mng-clerk-head'>VIEW</span> <span id='mng-clerk-head2' className='mng-clerk-head'>TRANSACTION HISTORY</span><br></br>
                </div>
                <br></br>

                <div className='mng-clerk-body'>
                    <Container className='container-fluid'>
                        <Row>
                            <Col ><input xs="auto" id='mng-clerk-search'
                                type="text"
                                placeholder="Search Here..."
                            ></input></Col>
                            <Col id='mng-clerk-details'>Name Account no</Col>
                            <Col id='mng-clerk-balance'>Balance</Col>
                        </Row>
                    </Container>
                    <br></br>

                    <div className='container-fluid'>
                        <Table border={3} className='mng-clerk-table'>
                            <thead >
                                <tr>
                                    <th id='mng-clerk-tableh'>S No</th>
                                    <th id='mng-clerk-tableh'>Date</th>
                                    <th id='mng-clerk-tableh'>Beneficiary Name</th>
                                    <th id='mng-clerk-tableh'>Transaction ID</th>
                                    <th id='mng-clerk-tableh'>Transaction Status</th>
                                    <th id='mng-clerk-tableh'>Amount</th>
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


                                </tr>
                                <tr>
                                    <td>2.</td>
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


                                </tr>
                                <tr>
                                    <td>4.</td>
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

export default ClerkUserTransHistr