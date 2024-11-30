import React from 'react';
import './Custcreditapplysty.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import creditcardgirl from '../Asserts/creditcard.png';

function Custcreditapply() {
  return (
    <div>
        {/* section1 start */}
        <div className="custcreditapplysection1">
          <div className="custcreditapplysection1pt1">
              <Row>
                  <Col>
                        <div className="custcreditapplysection1pt1col1"><br/><br/><br/><br/>
                        <p id="custcreditapplysection1pt1col1p1">Start Your Application Today:</p>
                        <p id="custcreditapplysection1pt1col1p2">Easy online application with<br/>quick processing!</p>

                        </div>
                        
                        <img src={creditcardgirl} id="custcreditapplyimg"/>

                        
                  </Col>
                  <Col>
                          <div className="custcreditapplysection1pt1col2"><br /><br />
                              <GoDotFill  className="custcreditapplyradiobtn"/><label>&nbsp;&nbsp;Earn rewards on every spend</label><br />
                              <GoDotFill  className="custcreditapplyradiobtn"/><label>&nbsp;&nbsp;Save with cashback on daily purchases </label><br />
                              <GoDotFill  className="custcreditapplyradiobtn"/><label>&nbsp;&nbsp;Affordable rates on outstanding balances </label><br />
                              <GoDotFill  className="custcreditapplyradiobtn"/><label>&nbsp;&nbsp;Adjust limits to match your spending needs </label><br />
                              <GoDotFill  className="custcreditapplyradiobtn"/><label>&nbsp;&nbsp;Secure transactions with real-time alerts </label>
                          </div>

                  </Col>
              </Row>
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="custcreditapplysection2"><br/><br/>
            <div className="custcreditapplysection2pt2"><br/>
                <center>
                    <h4>CREDIT CARD</h4><br/><br/>
                    <h3 id="custcreditapplysection2h3">"Empower Your Spending with the Perfect Card!"</h3></center>
                <br/>
                <div className="custcreditapplysection2details">
                          <p>Unlock exclusive rewards, cashback, and unbeatable benefits tailored to your lifestyle. Enjoy secure and convenient transactions worldwide with our diverse range of credit cards. Whether it’s shopping, travel, or everyday expenses, find the card that matches your needs perfectly.</p>
                          <br/><br/>
                          <center>
                          <Button type="submit" id="custcreditapplyapplybtn">
                          Apply Now &nbsp;<FaArrowRightLong />
                          </Button>
                          </center><br/><br/>
                          
                </div>
            </div><br/><br/>
        </div>
            
        {/* section2 end */}
    </div>
  )
}

export default Custcreditapply