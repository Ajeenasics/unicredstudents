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
        <div className='CustLoanIdentity'>
            <div className="circle-container">
                <div className="custLoancircle1">1</div>
                <div className="custLoancircle2">2</div>
                <div className="custLoancircle3">3</div>

            </div>

            <center>
                <Card className="horizontal-card" style={{ width: '900px', height: '400px' }}>
                    <Card.Body>
                        <div className="customerform">
                            <Container className="Custcontainer1">
                                <h5 style={{ color: "#9A00FF" }}>EmploymentDetails</h5>
                                <Row>
                                    <Col>
                                        <div className="formstyle">
                                            <Container className="container2">
                                                <Row>
                                                    <Col>
                                                        <label >Name Of Employer</label>
                                                        <input className='form-control' type="text" name="Name" onChange={store} /><br />
                                                        <label >Work Experience</label>
                                                        <input type="text" name="profile"  onChange={store} className='form-control' />
                                                            <label>Position</label>
                                                            <input type="text" name="number" onChange={store} className='form-control' />
                                                        
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
                                                        <input type="text" name="profile"  onChange={store} className='form-control' /><br/>
                                                            <label >Salary</label>
                                                        <input type="text" name="profile"  onChange={store} className='form-control' />
                                                        <label >Salary Slip</label>
                                                        <input type="text" name="profile" placeholder='0' onChange={store} className='form-control' />
                                                        <div className='CustIcon'>
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