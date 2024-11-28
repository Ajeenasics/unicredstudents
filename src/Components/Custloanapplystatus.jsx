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
        <div className="section1">
          <div className="custloanapplypt1">
              <Row>
                  <Col>
                        <div className="custloanptcol1"><br/><br/><br/>
                        <p style={{fontSize:15}}>Start Your Application Today:</p>
                        <p style={{fontSize:25}}>Easy online application with<br/>quick processing!</p>
                        <Button type="submit" style={{backgroundColor:"#bf5dff",color:"white",border:"none"}} id="applybtn1">
                          Apply Now &nbsp;<FaArrowRightLong />
                          </Button>

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
                <center><h3 style={{color:"#9a00ff",fontWeight:"bold"}}>Application Status</h3></center>
                <br/>
                <div className="formborder1">
                      <div className="formpt1">
                        <table>
                        <tr>
                              <th className="formpt1col">
                                  <label className="datalabel">Name</label>
                              </th>
                              <th className="formpt1col">
                                  <label className="datalabel">Contact</label>
                              </th>
                              <th className="formpt1col">
                                  <label className="datalabel">Email</label>
                              </th>
                              <th className="formpt1col">
                                  <label className="datalabel">Loan Type</label>
                              </th>
                              <th className="formpt1col">
                                  <label className="datalabel">Amount Required</label>
                              </th>
                              <th rowSpan={2} className="formpt1col"><label style={{ color: "#bf5dff" }}><GoDotFill className="radiobtn" />&nbsp;Pending</label></th>
                              <th rowSpan={2} className="formpt1col"><label style={{ color: "#bf5dff", textDecoration: "underline" }}>View More</label></th>
                          </tr>

                          <tr>
                              <td><p className="data">Akhila K</p></td>
                              <td><p className="data">1234567890</p></td>
                              <td><p className="data">akhila45@gmail.com</p></td>
                              <td><p className="data">ABC</p></td>
                              <td><p className="data">Rs.2,00,000/-</p></td>
                                                        
                          </tr>
                        </table>
                          
                      </div>
                </div><br/>
            </div><br/>
        </div>

        {/* section2 end */}

        {/* section3 start */}
        <div className="section3"><br/><br/>
            <div className="custloanapplypt3"><br/><br/>
                <center><h3 style={{color:"#9a00ff",fontWeight:"bold"}}>Apply Now</h3></center>
                <br/><br/>
                <div className="formborder2">
                  <div className="formpt2">
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
                          <Button type="submit" style={{backgroundColor:"#bf5dff",color:"white",border:"none"}} id="submitbtn2">
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