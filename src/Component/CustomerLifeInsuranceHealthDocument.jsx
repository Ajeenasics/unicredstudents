import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { MdOutlineFileUpload } from "react-icons/md";

import "./CustomerLifeInsuranceHealthDocument.css";

function CustomerLifeInsuranceHealthDocument() {
  return (
    <div>
        <div className="CustomerLifeInsuranceHealthDocument">
        <div className="CustomerLifeInsuranceHealthDocumentcontainer">
                <div className="CustomerLifeInsuranceHealthDocumentcircle1">1</div>
                <input className='CustomerLifeInsuranceHealthDocumentInput1'/>
                <div className="CustomerLifeInsuranceHealthDocumentcircle2">2</div>
                <input  className='CustomerLifeInsuranceHealthDocumentInput2'/>
                <div className="CustomerLifeInsuranceHealthDocumentcircle3">3</div>
                
            </div>
      <center>
        <Card className="CustomerLifeInsuranceHealthDocumentpolicycard" style={{ width: "800px", padding: "20px", borderRadius: "10px"}}>
          <Card.Body>
            <Container>
              <h5 style={{ color: "#9A00FF", marginBottom: "20px" }}>Health Information</h5>
              <Row>
              <Col>
                  <label>Pre-Existing Conditions</label><br />
                 <textarea placeholder="TextArea" style={{width:"300px", height:"50px"}}></textarea><br/><br/>
                 <label>Smoking</label>
                  <select className="CustomerLifeInsuranceHealthDocumentformcontrol">
                    <option value="">Choose type</option>
                    <option value="">a</option>
                    <option value="">b</option>
                    <option value="">c</option>
                  </select>
                </Col><br/>
                <Col>
                <label>Current Medications</label><br />
                <textarea placeholder="TextArea" style={{width:"300px", height:"50px"}}></textarea>
                </Col>
                
              </Row>
              <h5 style={{ color: "#9A00FF", marginTop: "30px", marginBottom: "20px" }}>Documentation</h5>
              <Row>
                <Col>
                <label >ID Proof</label>
                <input type="text" name="profile" placeholder='Upload File'  className='CustomerLifeInsuranceHealthDocumentformcontrol' />
                                                        
                   <div className='CustomerLifeInsuranceHealthDocumentIcon1'>
                       <MdOutlineFileUpload />
                    </div>
                    <label >Income Proof</label>
                <input type="text" name="profile" placeholder='Upload File'  className='CustomerLifeInsuranceHealthDocumentformcontrol' />
                                                        
                   <div className='CustomerLifeInsuranceHealthDocumentIcon2'>
                       <MdOutlineFileUpload />
                    </div>
                </Col>
                <Col>
                <label >Medical Report </label>
                <input type="text" name="profile" placeholder='Upload File'  className='CustomerLifeInsuranceHealthDocumentformcontrol' />
                                                        
                   <div className='CustomerLifeInsuranceHealthDocumentIcon3'>
                       <MdOutlineFileUpload />
                    </div>
                </Col>
              </Row>
              
              <center>
                <button className="CustomerLifeInsuranceHealthDocumentcontinuebutton mt-4">
                  Confirm
                </button>
              </center>
            </Container>
          </Card.Body>
        </Card>
      </center>
    </div>
    </div>
  )
}

export default CustomerLifeInsuranceHealthDocument