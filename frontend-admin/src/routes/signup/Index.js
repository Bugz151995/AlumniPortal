import React from "react";
import SignupForm from "./SignupForm";
import { Row, Col, Container } from "react-bootstrap";

function Index() {
  return (
    <Row className="m-0 align-items-center" style={{ minHeight: `100vh` }}>
      <Col md={8} xl={6}>
        <Container className="d-flex justify-content-center">
          <Col lg={12} xl={9} xxl={7} className="py-5">
            <div className="display-4 text-success">Hello,</div>
            <div className="lead mb-5">
              Please Enter your <span className="text-danger">Email</span>,{" "}
              <span className="text-danger">Password</span> and other User
              Credentials to register.
            </div>
            <SignupForm style={{ width: `100%` }} />
          </Col>
        </Container>
      </Col>
      <Col
        md={4}
        xl={6}
        className="d-none d-md-flex"
        style={{
          background: `linear-gradient(160deg, #db142198, #2fd4c9a8), url(${
            process.env.PUBLIC_URL + "/assets/images/parsu-bg-2.jpg"
          })`,
          minHeight: `100vh`,
        }}
      ></Col>
    </Row>
  );
}

export default Index;
