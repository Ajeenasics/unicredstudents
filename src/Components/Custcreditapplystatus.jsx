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
        <div className="custcreditstatussect1">
          <div className="custcreditstatussect1pt1">
              <Row>
                  <Col>
                        <div className="custcreditstatussect1pt1col1"><br/><br/><br/>
                        <p id="custcreditstatussect1pt1col1p1">Start Your Application Today:</p>
                        <p id="custcreditstatussect1pt1col1p2">Easy online application with<br/>quick processing!</p>
                        <Button type="submit" id="custcreditstatusapplybtn1">
                          Apply Now &nbsp;<FaArrowRightLong />
                          </Button>

                        </div>
                        
                        <img src={creditcardgirl} id="custcreditapplyimg"/>

                        
                  </Col>
                  <Col>
                          <div className="custcreditstatussect1pt1col2"><br /><br />
                              <GoDotFill  className="custcreditstatusradiobtn"/><label>&nbsp;&nbsp;Earn rewards on every spend</label><br />
                              <GoDotFill  className="custcreditstatusradiobtn"/><label>&nbsp;&nbsp;Save with cashback on daily purchases </label><br />
                              <GoDotFill  className="custcreditstatusradiobtn"/><label>&nbsp;&nbsp;Affordable rates on outstanding balances </label><br />
                              <GoDotFill  className="custcreditstatusradiobtn"/><label>&nbsp;&nbsp;Adjust limits to match your spending needs </label><br />
                              <GoDotFill  className="custcreditstatusradiobtn"/><label>&nbsp;&nbsp;Secure transactions with real-time alerts </label>
                          </div>

                  </Col>
              </Row>
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="custcreditstatussect2"><br/><br/>
            <div className="custcreditstatussect2pt2"><br/>
                <center><h3 id="custcreditstatussect2h3">Application Status</h3></center>
                <br/><br/>
                <div className="custcreditstatussect2formborder1">
                      <div className="custcreditstatussect2formpt1">
                        <table>
                        <tr>
                              <th className="custcreditstatussect2formth">
                                  <label className="custcreditstatussect2datalabel">Name</label>
                              </th>
                              <th className="custcreditstatussect2formth">
                                  <label className="custcreditstatussect2datalabel">Contact</label>
                              </th>
                              <th className="custcreditstatussect2formth">
                                  <label className="custcreditstatussect2datalabel">Email</label>
                              </th>
                              <th className="custcreditstatussect2formth">
                                  <label className="custcreditstatussect2datalabel">Card Type</label>
                              </th>
                              <th className="custcreditstatussect2formth">
                                  <label className="custcreditstatussect2datalabel">Credit Card Limit</label>
                              </th>
                              
                              <th className="custcreditstatussect2formthonerow"><label id="custcreditstatussect2formthlabel1"><br/><GoDotFill className="custcreditstatusradiobtn" />Pending</label></th>
                              <th className="custcreditstatussect2formthonerow"><label id="custcreditstatussect2formthlabel2"><br/>View More</label></th>
                              
                          </tr>

                          <tr>
                              <td className="custcreditstatussect2formtd"><p className="custcreditstatussect2data">Akhila K</p></td>
                              <td className="custcreditstatussect2formtd"><p className="custcreditstatussect2data">1234567890</p></td>
                              <td className="custcreditstatussect2formtd"><p className="custcreditstatussect2data">akhila45@gmail.com</p></td>
                              <td className="custcreditstatussect2formtd"><p className="custcreditstatussect2data">Platinum</p></td>
                              <td className="custcreditstatussect2formtd"><p className="custcreditstatussect2data">Rs.2,00,000/-</p></td>
                                                        
                          </tr>
                        </table>
                          
                      </div>
                </div><br/>
            </div><br/>
        </div>

        {/* section2 end */}

        {/* section3 start */}
        <div className="custcreditstatussect3"><br/><br/>
            <div className="custcreditstatussect3pt3"><br/>
                <center>
                    <h4>CREDIT CARD</h4><br/><br/>
                    <h3 id="custcreditstatussect3h3">"Empower Your Spending with the Perfect Card!"</h3></center>
                <br/>
                <div className="custcreditstatussect3pt3details">
                          <p>Unlock exclusive rewards, cashback, and unbeatable benefits tailored to your lifestyle. Enjoy secure and convenient transactions worldwide with our diverse range of credit cards. Whether it’s shopping, travel, or everyday expenses, find the card that matches your needs perfectly.</p>
                          <br/>
                          <center>
                          <Button type="submit" id="custcreditstatusapplybtn2">
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