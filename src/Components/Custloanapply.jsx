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
        <div className="custloanapplysection1">
          <div className="custloanapplysection1pt1">
              <Row>
                  <Col>
                        <div className="custloanapplysection1pt1col1"><br/><br/><br/><br/><br/>
                        <p id="custloanapplysection1pt1col1p1">Start Your Application Today:</p>
                        <p id="custloanapplysection1pt1col1p2">Easy online application with<br/>quick processing!</p>

                        </div>
                        
                        <img src={customer} id="custloanapplyimg"/>

                        
                  </Col>
                  <Col>
                          <div className="custloanapplysection1pt1col2"><br /><br /><br />
                              <GoDotFill  className="custloanapplysection1radiobtn"/><label>&nbsp;Flexible Payment</label><br />
                              <GoDotFill  className="custloanapplysection1radiobtn"/><label>&nbsp;Low Interest Rates </label><br />
                              <GoDotFill  className="custloanapplysection1radiobtn"/><label>&nbsp;Fast Approval </label><br />
                              <GoDotFill  className="custloanapplysection1radiobtn"/><label>&nbsp;Customized Solutions </label><br />
                              <GoDotFill  className="custloanapplysection1radiobtn"/><label>&nbsp;24/7 Support </label>
                          </div>

                  </Col>
              </Row>
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="custloanapplysection2"><br/><br/>
            <div className="custloanapplysection2pt2"><br/><br/>
                <center><h3 id="custloanapplysection2pt2h3">Apply Now</h3></center>
                <br/><br/>
                <div className="custloanapplysection2pt2formborder">
                  <div className="custloanapplysection2pt2formpt">
                      <Form>
                          <Row>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicText" id="custloanapplytypebox">
                                      <Form.Label>Loan Type</Form.Label>
                                      <Form.Select defaultValue="">
                                          <option value="" disabled>
                                              Choose Loan Type
                                          </option>
                                      </Form.Select>
                                  </Form.Group>
                              </Col>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicText" id="custloanapplyamtrequiredbox">
                                      <Form.Label>Amount Required</Form.Label>
                                      <Form.Control type="text" placeholder="Rs.0/-" />
                                  </Form.Group>

                              </Col>
                          </Row>
                          <Row>
                              <Form.Group className="mb-3" controlId="formBasicText" id="custloanapplypurposeloanbox">
                                  <Form.Label>Purpose Of Loan</Form.Label>
                                  <Form.Control as="textarea" aria-label="With textarea" placeholder="Description"/>
                              </Form.Group>

                          </Row><br/><br/><br/>
                          <center>
                          <Button type="submit" id="custloanapplysubmitbtn">
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