import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineFileUpload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import './CustomerLifeInsurancePersonal.css';
function CustomerLifeInsurancePersonal() {
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
         <div className='CustomerLifeInsurancePersonal'>
            <div className="CustomerLifeInsurancePersonalcirclecontainer">
                <div className="CustomerLifeInsurancePersonalcircle1">1</div>
                <input className='CustomerLifeInsurancePersonalInput1'/>
                <div className="CustomerLifeInsurancePersonalcircle2">2</div>
                <input  className='CustomerLifeInsurancePersonalInput2'/>
                <div className="CustomerLifeInsurancePersonalcircle3">3</div>
                
            </div>


            <center>
                <Card className="CustomerLifeInsurancePersonalhorizontal-card" style={{ width: '900px', height: '400px' }}>
                    <Card.Body>
                        <div className="CustomerLifeInsurancePersonalform">
                            <Container className="CustomerLifeInsurancePersonalcontainer1">
                                <h5 style={{ color: "#9A00FF" }}>Personal Details</h5>
                                <Row>
                                    <Col>
                                        <div className="CustomerLifeInsurancePersonalformstyle">
                                            <Container className="CustomerLifeInsurancePersonalcontainer2">
                                                <Row>
                                                    <Col>
                                                        <label >Name</label>
                                                        <input className='CustomerLifeInsurancePersonalformcontrol' type="text" name="Name" onChange={store} /><br />
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
                                                        <div className='CustomerLifeInsurancePersonalDate'>
                                                            <label>Date Of Birth</label>
                                                            <input type="date" name="date" onChange={store} className='CustomerLifeInsurancePersonalformcontrol' />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="CustomerLifeInsurancePersonalformstyle">
                                            <Container className="CustomerLifeInsurancePersonalcontainer2">
                                                <Row>
                                                    <Col>
                                                        <label>Contact Number</label><br />
                                                        <input className='CustomerLifeInsurancePersonalformcontrol' type="text" name="Number" onChange={store} /><br />
                                                        <label >Address</label><br />
                                                        <input className='CustomerLifeInsurancePersonalformcontrol' type="text" name="address" onChange={store} /><br />
                                                        <label >Profile Picture</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='CustomerLifeInsurancePersonalformcontrol' />
                                                        <div className='CustomerLifeInsurancePersonalIcon'>
                                                            <MdOutlineFileUpload />
                                                        </div>
                                                    </Col>
                                                    <center>
                                                        <button id='CustomerLifeInsurancePersonalButton'>Continue</button>
                                                        <div className='CustomerLifeInsurancePersonalArrow'>
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

export default CustomerLifeInsurancePersonal