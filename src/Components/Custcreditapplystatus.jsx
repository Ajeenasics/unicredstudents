import React from 'react';
import './Custcreditapplystatsty.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import creditcardgirl from '../Asserts/creditcard.png';

function Custcreditapplystatus() {
  return (
    <div>
        {/* section1 start */}
        <div className="section1">
          <div className="custcreditapplypt1">
              <Row>
                  <Col>
                        <div className="custcreditptcol1"><br/><br/><br/>
                        <p style={{fontSize:15}}>Start Your Application Today:</p>
                        <p style={{fontSize:25}}>Easy online application with<br/>quick processing!</p>
                        <Button type="submit" style={{backgroundColor:"#bf5dff",color:"white",border:"none"}} id="applybtn1">
                          Apply Now &nbsp;<FaArrowRightLong />
                          </Button>

                        </div>
                        
                        <img src={creditcardgirl} id="creditimg"/>

                        
                  </Col>
                  <Col>
                          <div className="custcreditptcol2" style={{lineHeight:"35px"}}><br /><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;&nbsp;Earn rewards on every spend</label><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;&nbsp;Save with cashback on daily purchases </label><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;&nbsp;Affordable rates on outstanding balances </label><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;&nbsp;Adjust limits to match your spending needs </label><br />
                              <GoDotFill  className="radiobtn"/><label>&nbsp;&nbsp;Secure transactions with real-time alerts </label>
                          </div>

                  </Col>
              </Row>
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="section2"><br/><br/>
            <div className="custcreditapplypt2"><br/>
                <center><h3 style={{color:"#9a00ff",fontWeight:"bold"}}>Application Status</h3></center>
                <br/><br/>
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
                                  <label className="datalabel">Card Type</label>
                              </th>
                              <th className="formpt1col">
                                  <label className="datalabel">Credit Card Limit</label>
                              </th>
                              <th rowSpan={2} className="formpt1col"><label style={{ color: "#bf5dff" }}><GoDotFill className="radiobtn" />&nbsp;Pending</label></th>
                              <th rowSpan={2} className="formpt1col"><label style={{ color: "#bf5dff", textDecoration: "underline" }}>View More</label></th>
                          </tr>

                          <tr>
                              <td><p className="data">Akhila K</p></td>
                              <td><p className="data">1234567890</p></td>
                              <td><p className="data">akhila45@gmail.com</p></td>
                              <td><p className="data">Platinum</p></td>
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
            <div className="custcreditapplypt3"><br/>
                <center>
                    <h4>CREDIT CARD</h4><br/><br/>
                    <h3 style={{color:"#9a00ff",fontWeight:"bold"}}>"Empower Your Spending with the Perfect Card!"</h3></center>
                <br/>
                <div className="section3details">
                          <p>Unlock exclusive rewards, cashback, and unbeatable benefits tailored to your lifestyle. Enjoy secure and convenient transactions worldwide with our diverse range of credit cards. Whether it’s shopping, travel, or everyday expenses, find the card that matches your needs perfectly.</p>
                          <br/>
                          <center>
                          <Button type="submit" style={{backgroundColor:"#bf5dff",color:"white",border:"none"}} id="applybtn2">
                          Apply Now &nbsp;<FaArrowRightLong />
                          </Button>
                          </center><br/><br/>
                          
                </div>
            </div><br/><br/>
        </div>
            
        {/* section3 end */}
    </div>
  )
}

export default Custcreditapplystatus