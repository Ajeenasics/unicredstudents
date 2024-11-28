import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineFileUpload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import './CustLoanDetails.css';

function CustLoanDetails() {
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

    const update = (e) => {
        console.log(form);
    };

    return (
        <div className='CustLoan'>
            <div className="circle-container">
                <div className="custLoancircle1">1</div>
                <div className="custLoancircle2">2</div>
                <div className="custLoancircle3">3</div>

            </div>

            <center>
                <Card className="horizontal-card" style={{ width: '900px', height: '350px' }}>
                    <Card.Body>
                        <div className="customerform">
                            <Container className="Custcontainer1">
                                <h5 style={{ color: "#9A00FF" }}>Personal Details</h5>
                                <Row>
                                    <Col>
                                        <div className="formstyle">
                                            <Container className="container2">
                                                <Row>
                                                    <Col>
                                                        <label >Name</label>
                                                        <input className='form-control' type="text" name="Name" onChange={store} /><br />
                                                        <label>Gender</label><br />
                                                        <label>
                                                            <input type="radio" name="gender" value="male" /> Male
                                                        </label>&nbsp;&nbsp;&nbsp;
                                                        <label>
                                                            <input type="radio" name="gender" value="female" /> Female
                                                        </label>&nbsp;&nbsp;&nbsp;
                                                        <label>
                                                            <input type="radio" name="gender" value="other" /> Other
                                                        </label><br /><br /><br />
                                                        <div className='customer'>
                                                            <label>DateOfBirth</label>
                                                            <input type="date" name="date" onChange={store} className='form-control' />
                                                        </div>
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
                                                        <label>PhoneNumber</label><br />
                                                        <input className='form-control' type="text" name="Number" onChange={store} /><br />
                                                        <label >Address</label><br />
                                                        <input className='form-control' type="text" name="address" onChange={store} /><br />
                                                        <label >ProfilePicture</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='form-control' />
                                                        <div className='CustIcon'>
                                                            <MdOutlineFileUpload />
                                                        </div>
                                                    </Col>
                                                    <center>
                                                        <button id='Cust'>Continue</button>
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
    );
}

export default CustLoanDetails;
