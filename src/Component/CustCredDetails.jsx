import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineFileUpload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import './CustCredDetails.css';
function CustCredDetails() {
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
        <div className='CustCredDetails'>
        <div className="CustCredDetailscirclecontainer">
                <div className="CustCredDetailscircle1">1</div>
                <input className='CustCredDetailsInput1'/>
                <div className="CustCredDetailscircle2">2</div>
                
            </div>

            <center>
                <Card className="CustCredDetailshorizontal-card" style={{ width: '900px', height: '500px' }}>
                    <Card.Body>
                        <div className="CustCredDetailscustomerform">
                            <Container className="CustCredDetailscontainer1">
                                <h5 style={{ color: "#9A00FF" }}>Personal Details</h5>
                                <Row>
                                    <Col>
                                        <div className="CustCredDetailsformstyle">
                                            <Container className="CustCredDetailscontainer2">
                                                <Row>
                                                    <Col>
                                                        <label >Name</label>
                                                        <input className='CustCredDetailsformcontrol' type="text" name="Name" onChange={store} /><br />
                                                        <label>Email ID</label>
                                                            <input type="text" name="Mail" onChange={store} className='CustCredDetailsformcontrol' /><br />
                                                            <label>Date Of Birth</label>
                                                            <input type="date" name="date" onChange={store} className='CustCredDetailsformcontrol' />
                                                            <label>Pancard Number</label><br />
                                                            <input className='CustCredDetailsformcontrol' type="text" name="PanNumber" onChange={store} /><br />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="CustCredDetailsformstyle">
                                            <Container className="CustCredDetailscontainer2">
                                                <Row>
                                                    <Col>
                                                        <label>Contact Number</label><br />
                                                        <input className='CustCredDetailsformcontrol' type="text" name="Number" onChange={store} /><br />
                                                        <label >Address</label><br />
                                                        <input className='CustCredDetailsformcontrol' type="text" name="address" onChange={store} /><br />
                                                        <label >ProfilePicture</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='CustCredDetailsformcontrol' />
                                                        
                                                        <div className='CustCredDetailsIcon'>
                                                            <MdOutlineFileUpload />
                                                        </div>
                                                    </Col>
                                                    <center>
                                                        <button id='CustCredDetailsCustomer'>Continue</button>
                                                        <div className='CustCredDetailsArrow'>
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

export default CustCredDetails