import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineFileUpload } from "react-icons/md";
import './CustLoanEmplDetails.css';

function CustLoanEmplDetails() {
    const [form, setForm] = useState({
        Email: "",
        Contact: "",
        Address: "",
        Gender: "",
        Dateofbirth: ""
    });

    const store = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
  return (
    <div>
        <div className='CustLoanEmplDetails'>
        <div className="CustLoanEmplDetailscirclecontainer">
                <div className="CustLoanEmplDetailscircle1">1</div>
                <input className='CustLoanEmplDetailsInput1'/>
                <div className="CustLoanEmplDetailscircle2">2</div>
                <input  className='CustLoanEmplDetailsInput2'/>
                <div className="CustLoanEmplDetailscircle3">3</div>
                
            </div>

            <center>
                <Card className="CustLoanEmplDetailshorizontalcard" style={{ width: '900px', height: '400px' }}>
                    <Card.Body>
                        <div className="CustLoanEmplDetailscustomerform">
                            <Container className="CustLoanEmplDetailsCustcontainer1">
                                <h5 style={{ color: "#9A00FF" }}>EmploymentDetails</h5>
                                <Row>
                                    <Col>
                                        <div className="CustLoanEmplDetailsformstyle">
                                            <Container className="CustLoanEmplDetailscontainer2">
                                                <Row>
                                                    <Col>
                                                        <label >Name Of Employer</label>
                                                        <input className='CustLoanEmplDetailsformcontrol' type="text" name="Name" onChange={store} /><br />
                                                        <label >Work Experience</label>
                                                        <input type="text" name="profile"  onChange={store} className='CustLoanEmplDetailsformcontrol' />
                                                            <label>Position</label>
                                                            <input type="text" name="number" onChange={store} className='CustLoanEmplDetailsformcontrol' />
                                                        
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="formstyle">
                                            <Container className="container2">
                                                <Row>
                                                    <Col>
                                                    <label >Employer Contact Number</label>
                                                        <input type="text" name="profile"  onChange={store} className='CustLoanEmplDetailsformcontrol' /><br/>
                                                            <label >Salary</label>
                                                        <input type="text" name="profile"  onChange={store} className='CustLoanEmplDetailsformcontrol' />
                                                        <label >Salary Slip</label>
                                                        <input type="text" name="profile" placeholder='0' onChange={store} className='CustLoanEmplDetailsformcontrol' />
                                                        <div className='CustLoanEmplDetailsCustIcon'>
                                                            <MdOutlineFileUpload />
                                                        </div>
                                                    </Col>
                                                    <center>
                                                        <button id='Employ'>Confirm</button>
                                                       
                                                    </center>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Card.Body>
                </Card>
            </center>
        </div>
    </div>
  )
}

export default CustLoanEmplDetails