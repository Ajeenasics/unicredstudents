import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineFileUpload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import './CustomerLoanIdentity.css';

function CustomerLoanIdentity() {
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
        <div className='CustLoanIdentity'>
            <div className="CustLoanIdentitycirclecontainer">
                <div className="custLoanIdentitycircle1">1</div>
                <input className='CustLoanIdentityInput1'/>
                <div className="custLoanIdentitycircle2">2</div>
                <input  className='CustLoanIdentityInput2'/>
                <div className="custLoanIdentitycircle3">3</div>
                
            </div>
            <center>
                <Card className="CustLoanIdentityhorizontal-card" style={{ width: '900px', height: '510px' }}>
                    <Card.Body>
                        <div className="customerLoanIdentityform">
                            <Container className="CustIdentitycontainer1">
                                <h5 style={{ color: "#9A00FF" }}>Identity</h5>
                                <Row>
                                    <Col>
                                        <div className="customerLoanIdentityformstyle">
                                            <Container className="customerLoanIdentitycontainer2">
                                                <Row>
                                                    <Col>
                                                        <label >PancardNUmber</label>
                                                        <input className='customerLoanIdentityformcontrol' type="text" name="Name" onChange={store} /><br />
                                                        <label >PanCard</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='customerLoanIdentityformcontrol' />
                                                        <div className='CustLoanIdentityIcon1'>
                                                            <MdOutlineFileUpload />
                                                            </div>
                                                            <label>AadarNumber</label>
                                                            <input type="text" name="number" onChange={store} className='customerLoanIdentityformcontrol' />
                                                        <label >Aadhaar</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='customerLoanIdentityformcontrol' />
                                                        <div className='CustLoanIdentityIcon2'>
                                                            <MdOutlineFileUpload /></div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="formstyle">
                                            <Container className="customerLoanIdentitycontainer2">
                                                <Row>
                                                    <Col>
                                                    <label >Voter'sId</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='customerLoanIdentityformcontrol' />
                                                        <div className='CustLoanIdentityIcon3'>
                                                            <MdOutlineFileUpload /></div><br/>
                                                            <label >DrivingLiscence</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='customerLoanIdentityformcontrol' />
                                                        <div className='CustLoanIdentityIcon4'>
                                                            <MdOutlineFileUpload /></div>
                                                        <label >Passport</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='customerLoanIdentityformcontrol' />
                                                        <div className='CustLoanIdentityIcon'>
                                                            <MdOutlineFileUpload />
                                                        </div>
                                                    </Col>
                                                    <center>
                                                        <button id='CustomerLoanIdentity'>Continue</button>
                                                        <div className='CustLoanIconArrow'>
                                                            <FaLongArrowAltRight />
                                                        </div>
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
   
  )
}

export default CustomerLoanIdentity