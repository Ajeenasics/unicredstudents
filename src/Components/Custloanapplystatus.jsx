//Custloanapplystatus.jsx
//Customer-Loan-ApplyNow-ApplicationStatus 
import React from 'react';
import './Custloanapplystatsty.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import customer from '../Asserts/custloan.png';

function Custloanapplystatus() {
  return (
    <div>
        {/* section1 start */}
        <div className="custloanapplystatsect1">
          <div className="custloanapplystatsect1pt1">
              <Row>
                  <Col>
                        <div className="custloanapplystatsect1pt1col1"><br/><br/><br/>
                        <p id="custloanapplystatsect1pt1col1p1">Start Your Application Today:</p>
                        <p id="custloanapplystatsect1pt1col1p2">Easy online application with<br/>quick processing!</p>
                        <Button type="submit" id="custloanapplystatapplybtn1">
                          Apply Now &nbsp;<FaArrowRightLong />
                          </Button>

                        </div>
                        
                        <img src={customer} id="custloanapplystatimg"/>

                        
                  </Col>
                  <Col>
                          <div className="custloanapplystatsect1pt1col2"><br /><br /><br />
                              <GoDotFill  className="custloanapplystatradiobtn"/><label>&nbsp;Flexible Payment</label><br />
                              <GoDotFill  className="custloanapplystatradiobtn"/><label>&nbsp;Low Interest Rates </label><br />
                              <GoDotFill  className="custloanapplystatradiobtn"/><label>&nbsp;Fast Approval </label><br />
                              <GoDotFill  className="custloanapplystatradiobtn"/><label>&nbsp;Customized Solutions </label><br />
                              <GoDotFill  className="custloanapplystatradiobtn"/><label>&nbsp;24/7 Support </label>
                          </div>

                  </Col>
              </Row>
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="custloanapplystatsect2"><br/><br/>
            <div className="custloanapplystatsect2pt2"><br/><br/>
                <center><h3 id="custloanapplystatsect2h3">Application Status</h3></center>
                <br/>
                <div className="custloanapplystatsect2pt2formborder1">
                      <div className="custloanapplystatsect2pt2formpt1">
                        <table>
                        <tr>
                              <th className="custloanapplystatsect2pt2th">
                                  <label className="custloanapplystatsect2pt2thlabel">Name</label>
                              </th>
                              <th className="custloanapplystatsect2pt2th">
                                  <label className="custloanapplystatsect2pt2thlabel">Contact</label>
                              </th>
                              <th className="custloanapplystatsect2pt2th">
                                  <label className="custloanapplystatsect2pt2thlabel">Email</label>
                              </th>
                              <th className="custloanapplystatsect2pt2th">
                                  <label className="custloanapplystatsect2pt2thlabel">Loan Type</label>
                              </th>
                              <th className="custloanapplystatsect2pt2th">
                                  <label className="custloanapplystatsect2pt2thlabel">Amount Required</label>
                              </th>
                              <th className="custloanapplystatsect2pt2thonerow"><label id="custloanapplystatsect2pt2thonerowlabel1">
                                <GoDotFill className="custloanapplystatradiobtn" />&nbsp;Pending</label></th>
                              <th className="custloanapplystatsect2pt2thonerow"><label id="custloanapplystatsect2pt2thonerowlabel2">View More</label></th>
                          </tr>

                          <tr>
                              <td className="custloanapplystatsect2pt2td"><p className="custloanapplystatsect2pt2tddata">Akhila K</p></td>
                              <td className="custloanapplystatsect2pt2td"><p className="custloanapplystatsect2pt2tddata">1234567890</p></td>
                              <td className="custloanapplystatsect2pt2td"><p className="custloanapplystatsect2pt2tddata">akhila45@gmail.com</p></td>
                              <td className="custloanapplystatsect2pt2td"><p className="custloanapplystatsect2pt2tddata">ABC</p></td>
                              <td className="custloanapplystatsect2pt2td"><p className="custloanapplystatsect2pt2tddata">Rs.2,00,000/-</p></td>
                                                        
                          </tr>
                        </table>
                          
                      </div>
                </div><br/>
            </div><br/>
        </div>

        {/* section2 end */}

        {/* section3 start */}
        <div className="custloanapplystatsect3"><br/><br/>
            <div className="custloanapplystatsect3pt3"><br/><br/>
                <center><h3 id="custloanapplystatsect3h3">Apply Now</h3></center>
                <br/><br/>
                <div className="custloanapplystatsect3pt3formborder2">
                  <div className="custloanapplystatsect3pt3formpt2">
                      <Form>
                          <Row>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicText" id="custloanapplystatsect3loantypebox">
                                      <Form.Label>Loan Type</Form.Label>
                                      <Form.Select defaultValue="">
                                          <option value="" disabled>
                                              Choose Loan Type
                                          </option>
                                      </Form.Select>
                                  </Form.Group>
                              </Col>
                              <Col>
                                  <Form.Group className="mb-3" controlId="formBasicText" id="custloanapplystatsect3amtrequiredbox">
                                      <Form.Label>Amount Required</Form.Label>
                                      <Form.Control type="text" placeholder="Rs.0/-"/>
                                  </Form.Group>

                              </Col>
                          </Row>
                          <Row>
                              <Form.Group className="mb-3" controlId="formBasicText" id="custloanapplystatsect3purposeloanbox">
                                  <Form.Label>Purpose Of Loan</Form.Label>
                                  <Form.Control as="textarea" aria-label="With textarea" placeholder="Description"/>
                              </Form.Group>

                          </Row><br/><br/><br/>
                          <center>
                          <Button type="submit" id="custloanapplystatsect3submitbtn2">
                          Next &nbsp;<FaArrowRightLong />
                          </Button>
                          </center><br/><br/>
                          
                      </Form>
                  </div>
                </div>
            </div><br/><br/><br/>
        </div>
            
        {/* section3 end */}
    </div>
  )
}

export default Custloanapplystatus