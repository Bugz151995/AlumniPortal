import React from "react";
import LoginForm from "./LoginForm";
import { Row, Col, Container } from "react-bootstrap";

function Index() {
  return (
    <Row className="m-0 align-items-center" style={{ minHeight: `100vh` }}>
      <Col
        md={6}
        lg={7}
        className="d-none d-md-flex"
        style={{
          background: `linear-gradient(160deg, #db142198, #2fd4c9a8), url(${
            process.env.PUBLIC_URL + "/assets/images/parsu-bg.jpg"
          })`,
          minHeight: `100vh`,
        }}
      ></Col>
      <Col md={6} lg={5} className="d-flex justify-content-center">
        <Col lg={12} xl={9} className="py-5">
          <Container>
            <div className="display-4 text-success">Howdy,</div>
            <div className="lead mb-5">
              Please Enter your <span className="text-danger">Email</span> and{" "}
              <span className="text-danger">Password</span>
            </div>
            <LoginForm style={{ width: `100%` }} />
          </Container>
        </Col>
      </Col>
    </Row>
  );
}

export default Index;