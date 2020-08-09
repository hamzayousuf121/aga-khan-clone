import React, { Component } from 'react'
import { Col,Form, FormGroup, Label, Input,Row,Container,Button} from 'reactstrap';
import NavBar from "../Nav/nav";
import Footer from "../footer/footer";
import {Link} from "react-router-dom";
import firebase from "../../firebase"




class Login extends Component {

  state={
    name:'',email:''
}

dataHandler = e => {
  this.setState({[e.target.name]:e.target.value})
}


    

  render() {
  const {email,password} = this.state;   

    return (
      <div className="h-100">
      <NavBar classes="bg-info" text="text-white"/>
        <Container>
        <Row>
            {/* form start from here */}
        <Col md={6}>
        <Form className="my-3" onSubmit={this.Submithandler}>
        <Row form>
        
        <Col md={12}>
        <FormGroup>
        <Label for="email">Email</Label>
            <Input type="email" name="email" value={email} onChange={this.dataHandler} onMouseOut={this.validationHandler} placeholder="Type Your Email" id="email"/>
        </FormGroup>
        </Col>

        <Col md={12}>
        <FormGroup>
        <Label for="password">Password</Label>
            <Input type="password" onChange={this.dataHandler} value={password} onMouseOut={this.validationHandler} name="password" placeholder="Type Your Password" id="password"/>
        </FormGroup>
        </Col>


        <Col md={6}>
        <FormGroup>
        <Button className="btn btn-success">Login</Button>
        <Link className="text-decoration-0 text-white btn btn-info ml-2" to="SignUp">SingUp</Link>
        </FormGroup>
        </Col>
        </Row>
    </Form>
        </Col>
    </Row> 
        </Container>

    <Footer classes="bg-dark py-3"/>
      </div>
    )
  }
}

export default Login
