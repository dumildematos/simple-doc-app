import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaLinkedinIn, FaFacebookF, FaGoogle } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel'
import './../../scss/views/_login.scss';


const  Login = () => {

  return (
    <>
      <Container className="main-container">
        <Row xs={2} md={2} lg={2}>
          <Col xs={6} className="col">
            <Container>
              <Row xs={2} md={2} lg={2}>
                <Col xs={12}  className="col-header">
                  <header>
                    <h1>Simple <b>Doc</b></h1>
                  </header>
                  <p>
                  Documente seus produtos, serviços, processos e muito mais de forma  fácil e ágil.
                  </p>
                </Col>
              </Row>
              <Row xs={2} md={2} lg={2}>
                <Col xs={12}>
                  <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" size="lg" block id="btn-login" type="submit">
                    Submit
                  </Button>
                  </Form>
                </Col>
              </Row>
              <Row >
                <Col xs={6}>
                  <p className="text-center">or</p>
                </Col>
              </Row>
              <Row>
                <Col xs={6} className="d-flex justify-content-center social-login">
                  <Button><FaLinkedinIn/></Button>{' '}
                  <Button><FaFacebookF/></Button>{' '}
                  <Button><FaGoogle/></Button>
                </Col>
              </Row>
              <Row>
                <Col xs={6} className="p-10 sign-up">
                  <span>Ainda não tem uma conta,  <a> Registra-se</a></span>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={6} className="col">

            {/* <div className="fold-container">
                <div className="fold-content">
                    <div className="fold_item"></div>
                </div>
            </div> */}
            <Container>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Container>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
