import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineFileUpload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import './CustomerLoanIdentity.css';

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
                <Card className="horizontal-card" style={{ width: '900px', height: '510px' }}>
                    <Card.Body>
                        <div className="customerform">
                            <Container className="Custcontainer1">
                                <h5 style={{ color: "#9A00FF" }}>Identity</h5>
                                <Row>
                                    <Col>
                                        <div className="formstyle">
                                            <Container className="container2">
                                                <Row>
                                                    <Col>
                                                        <label >PancardNUmber</label>
                                                        <input className='form-control' type="text" name="Name" onChange={store} /><br />
                                                        <label >PanCard</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='form-control' />
                                                        <div className='CustIcon1'>
                                                            <MdOutlineFileUpload />
                                                            </div>
                                                            <label>AadarNumber</label>
                                                            <input type="text" name="number" onChange={store} className='form-control' />
                                                        <label >Aadhaar</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='form-control' />
                                                        <div className='CustIcon2'>
                                                            <MdOutlineFileUpload /></div>
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
                                                    <label >Voter'sId</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='form-control' />
                                                        <div className='CustIcon3'>
                                                            <MdOutlineFileUpload /></div><br/>
                                                            <label >DrivingLiscence</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='form-control' />
                                                        <div className='CustIcon4'>
                                                            <MdOutlineFileUpload /></div>
                                                        <label >Passport</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='form-control' />
                                                        <div className='CustIcon'>
                                                            <MdOutlineFileUpload />
                                                        </div>
                                                    </Col>
                                                    <center>
                                                        <button>Continue</button>
                                                        <div className='CustIconArrow'>
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
    </div>
  )
}

export default CustLoanEmplDetails