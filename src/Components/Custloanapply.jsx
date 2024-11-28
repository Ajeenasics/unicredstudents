//Custloanapply.jsx
//Customer-Loan-ApplyNow
import React from 'react';
import './Custloanapplysty.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import customer from '../Asserts/custloan.png';


function Custloanapply() {

  return (
    <div>
        {/* section1 start */}
        <div className="section1">
          <div className="custloanapplypt1">
              <Row>
                  <Col>
                        <div className="custloanptcol1"><br/><br/><br/><br/><br/>
                        <p style={{fontSize:15}}>Start Your Application Today:</p>
                        <p style={{fontSize:25}}>Easy online application with<br/>quick processing!</p>

                        </div>
                        
                        <img src={customer} id="custimg"/>

                        
                  </Col>
                  <Col>
                          <div className="custloanptcol2" style={{lineHeight:"30px"}}><br /><br /><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;Flexible Payment</label><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;Low Interest Rates </label><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;Fast Approval </label><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;Customized Solutions </label><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;24/7 Support </label>
                          </div>

                  </Col>
              </Row>
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="section2"><br/><br/>
            <div className="custloanapplypt2"><br/><br/>
                <center><h3 style={{color:"#9a00ff",fontWeight:"bold"}}>Apply Now</h3></center>
                <br/><br/>
                <div className="formborder">
                  <div className="formpt">
                      <Form>
                          <Row>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicText" id="loantypebox">
                                      <Form.Label>Loan Type</Form.Label>
                                      <Form.Select defaultValue="">
                                          <option value="" disabled>
                                              Choose Loan Type
                                          </option>
                                      </Form.Select>
                                  </Form.Group>
                              </Col>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicText" id="amtrequiredbox">
                                      <Form.Label>Amount Required</Form.Label>
                                      <Form.Control type="text" placeholder="Rs.0/-" />
                                  </Form.Group>

                              </Col>
                          </Row>
                          <Row>
                              <Form.Group className="mb-3" controlId="formBasicText" id="purposeloanbox">
                                  <Form.Label>Purpose Of Loan</Form.Label>
                                  <Form.Control as="textarea" aria-label="With textarea" placeholder="Description" style={{padding:"10px"}}/>
                              </Form.Group>

                          </Row><br/><br/><br/>
                          <center>
                          <Button type="submit" style={{backgroundColor:"#bf5dff",color:"white",border:"none"}} id="submitbtn">
                          Next &nbsp;<FaArrowRightLong />
                          </Button>
                          </center><br/><br/>
                          
                      </Form>
                  </div>
                </div>
            </div><br/><br/><br/>
        </div>
            
        {/* section2 end */}
    </div>
  )
}

export default Custloanapply