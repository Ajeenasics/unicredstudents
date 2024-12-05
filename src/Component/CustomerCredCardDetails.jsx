import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineFileUpload } from "react-icons/md";
import './CustomerCredCardDetails.css';
function CustomerCredCardDetails() {
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
       
    <div>
        <div className='CustomerCredCardDetails'>
        <div className="CustomerCredCardDetailscirclecontainer">
                <div className="CustomerCredCardDetailscircle1">1</div>
                <input className='CustomerCredCardDetailsInput1'/>
                <div className="CustomerCredCardDetailscircle2">2</div>
                
            </div>

            <center>
                <Card className="CustomerCredCardDetailshorizontal-card" style={{ width: '900px', height: '450px' }}>
                    <Card.Body>
                        <div className="CustomerCredCardDetailscustomerform">
                            <Container className="CustomerCredCardDetailscontainer1">
                                <h5 style={{ color: "#9A00FF" }}>Card Details</h5>
                                <Row>
                                    <Col>
                                        <div className="CustomerCredCardDetailsformstyle">
                                            <Container className="CustomerCredCardDetailscontainer2">
                                                <Row>
                                                    <Col>
                                                    <label>Card Type</label><br />
                                                        <label>
                                                            <input type="radio" name="card type" value="Platinum" />Platinum
                                                        </label>&nbsp;&nbsp;&nbsp;
                                                        <label>
                                                            <input type="radio" name="card type" value="Gold" /> Gold
                                                        </label>
                                                        <br /><br/><br/>
                                                        <label>Employment Status</label>
                                                            <input type="text" name="Employmentl" onChange={store} className='CustomerCredCardDetailsformcontrol' /><br />
                                                            <label>Salary</label><br />
                                                        <input className='CustomerCredCardDetailsformcontrol' type="salary" name="Number"  placeholder="0/-" onChange={store} />
                                                            
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="CustomerCredCardDetailsformstyle">
                                            <Container className="CustomerCredCardDetailscontainer2">
                                                <Row>
                                                    <Col>
                                                        <label>Credit card Limit</label><br />
                                                        <input className='CustomerCredCardDetailsformcontrol' type="text" name="Number"  placeholder="2,00,000/-" onChange={store} /><br />
                                                        <label >ID Proof</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='CustomerCredCardDetailsformcontrol' />
                                                        
                                                        <div className='CustomerCredCardDetailsIcon1'>
                                                            <MdOutlineFileUpload />
                                                        </div><br />
                                                        <label>Income Proof</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='CustomerCredCardDetailsformcontrol' />
                                                        
                                                        <div className='CustomerCredCardDetailsIcon'>
                                                            <MdOutlineFileUpload />
                                                        </div>
                                                    </Col>
                                                    <center>
                                                        <button id='CustomerCredCardDetailsCustomer'>Confirm</button>
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

    </div>
  )
}

export default CustomerCredCardDetails