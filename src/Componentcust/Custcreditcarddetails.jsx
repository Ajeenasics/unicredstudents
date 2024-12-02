// Customer-credit-card-details//
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import green from '../Assert/green.png';
import cust from '../Assert/profile.png';
import './Custcreditcarddetails.css';

function Custcreditcarddetails() {
  return (
    <div className="cust-loan-app">
      <center>
        <h5 className='cust-app-main-heading'>Application Details</h5>
        {/* profil-photo */}
        <Card body className="app-main-card">
          <div className="cust-profile-img">
            <div className="profile-img-grp">
              <img src={cust} className="cust-profile-img" alt="Customer Profile" />
              <img src={green} className="cust-profile-green-img" alt="Status Indicator" />
            </div>
            <h6 className='cust-app-card-heading'>Name</h6>
          </div>
          {/* progress-circles */}
          <div className="profile-progress-container">
      <div className="profile-progress-step">
        <div className="profile-progress-circle.completed">
          <i className="progress-check-icon">✓</i>
        </div>
        <h6 className="cust-app-card-heading">Apply</h6>
        <p>Applied On 12/11/2024</p>
      </div>
      <div className="progress-line-completed"></div>
      <div className="profile-progress-step">
        <div className="profile-progress-circle.completed">
          <i className="progress-check-icon">✓</i>
        </div>
        <h6 className="cust-app-card-heading">Clerk Verify</h6>
        <p>Verified On 12/11/2024</p>
      </div>
      <div className="progress-line"></div>
      <div className="profile-progress-step">
        <div className="profile-progress-circle">
          <i></i>
        </div>
        <h6 className="cust-app-card-heading">Manager Approval</h6>
        <p>Working In Progress</p>
      </div>
      <div className="progress-line"></div>
      <div className="profile-progress-step">
        <div className="profile-progress-circle">
          <i></i>
        </div>
        <h6 className="cust-app-card-heading">Loan Approved</h6>
        <p>Working In Progress</p>
      </div>
    </div>
     {/* Personal Details */}
     <Container>
            <Row>
              <Col lg={6} className="cust-app-card-personal-details">
                <h6 className='cust-app-card-heading'>Personal Details</h6>
                <Row>
                  <Col md={6}>
                    <label className="cust-app-labeltag">E-mail</label>
                    <input type="text" className="cust-app-inputtag"/>
                  </Col>
                  <Col md={6}>
                    <label  className="cust-app-labeltag">Contact</label>
                    <input type="number" className="cust-app-inputtag"/>
                  </Col>
                </Row>
                <Row className="cust-app-card-text1">
                  <Col md={6}>
                    <label className="cust-app-labeltag">Gender</label>
                    <input type="text" className="cust-app-inputtag"/>
                  </Col>
                  <Col md={6}>
                    <label  className="cust-app-labeltag">Address</label>
                    <input type="text" className="cust-app-inputtag"/>
                  </Col>
                </Row>
                <Row className="cust-app-card-text1">
                  <Col md={6}>
                    <label className="cust-app-labeltag">Date Of Birth</label>
                    <input type="date" className="cust-app-inputtag"/>
                  </Col>
                </Row>
              </Col>
              {/* Card Details */}
              <Col lg={6} className="cust-app-credit-card-identity">
                <h6 className='cust-app-card-heading'>Card Details</h6>
                <Row>
                  <Col md={6}>
                    <label className="cust-app-labeltag">Card Type</label>
                    <input type="text" className="cust-app-inputtag"/>
                  </Col>
                  <Col md={6}>
                    <label className="cust-app-labeltag">Credit Card Limit</label><br/>
                    <input type="number" className="cust-app-inputtag"/>
                  </Col>
                </Row>
                <Row className="cust-app-card-text1">
                  <Col md={6}>
                    <label  className="cust-app-labeltag">Aadhaar Number</label>
                    <input type="number" className="cust-app-inputtag"/>
                  </Col>
                  <Col md={6}>
                  <label className="cust-app-labeltag">ID Proof</label><br/>
                  <a href="link" className="form-control-link">View File</a>
                  </Col>
                </Row>
                <Row className="cust-app-card-text2">
                  
                  <Col md={6}>
                    <label className="cust-app-labeltag">Salary</label><br/>
                    <input type="number" className="cust-app-inputtag"/>
                  </Col>
                  <Col md={6}>
                    <label className="cust-app-labeltag">Income Proof</label>
                    <a href="link" className="form-control-link">View File</a>
                  </Col>
                </Row>
              </Col>
            </Row>           
          </Container>
        </Card>
      </center>
    </div>
  )
}

export default Custcreditcarddetails