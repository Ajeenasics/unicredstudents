import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./CustomerLifeInsurancePolicyNominee.css";

function CustomerLifeInsurancePolicyNominee() {
  return (
    <div className="CustomerLifeInsurancePolicyNominee">
        <div className="CustomerLifeInsurancePolicyNomineecontainer">
                <div className="CustomerLifeInsurancePolicyNomineecircle1">1</div>
                <input className='CustomerLifeInsurancePolicyNomineeInput1'/>
                <div className="CustomerLifeInsurancePolicyNomineecircle2">2</div>
                <input  className='CustomerLifeInsurancePolicyNomineeInput2'/>
                <div className="CustomerLifeInsurancePolicyNomineecircle3">3</div>
                
            </div>
      <center>
        <Card className="CustomerLifeInsurancePolicyNomineepolicycard" style={{ width: "800px", padding: "20px", borderRadius: "10px"}}>
          <Card.Body>
            <Container>
              <h5 style={{ color: "#9A00FF", marginBottom: "20px" }}>Policy Details</h5>
              <Row>
                <Col>
                  <label>Payment Frequency</label><br />
                  <select className="CustomerLifeInsurancePolicyNomineeformcontrol">
                    <option value="">Choose Payment Frequency</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </Col>
                <Col>
                  <label>Policy Term</label><br />
                  <select className="CustomerLifeInsurancePolicyNomineeformcontrol">
                    <option value="">Choose Policy Term</option>
                    <option value="5 years">5 Years</option>
                    <option value="10 years">10 Years</option>
                    <option value="15 years">15 Years</option>
                  </select>
                </Col>
              </Row>
              <h5 style={{ color: "#9A00FF", marginTop: "30px", marginBottom: "20px" }}>Nominee Information</h5>
              <Row>
                <Col>
                  <label>Nominee Name</label><br />
                  <input type="text" className="CustomerLifeInsurancePolicyNomineeformcontrol" />
                </Col>
                <Col>
                  <label>Contact Number</label><br />
                  <input type="text" className="CustomerLifeInsurancePolicyNomineeformcontrol"  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <label>Nominee Relationship</label><br />
                  <select className="CustomerLifeInsurancePolicyNomineeformcontrol">
                    <option value="">Choose Nominee Relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="parent">Parent</option>
                  </select>
                </Col>
                <Col>
                  <label>Address</label><br />
                  <input type="text" className="CustomerLifeInsurancePolicyNomineeformcontrol" />
                </Col>
              </Row>
              <center>
                <button className="CustomerLifeInsurancePolicyNomineecontinuebutton mt-4">
                  Continue <FaLongArrowAltRight />
                </button>
              </center>
            </Container>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}

export default CustomerLifeInsurancePolicyNominee;
