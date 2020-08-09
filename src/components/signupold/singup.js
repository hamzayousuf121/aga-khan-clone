import React from 'react';
import NavBar from "../Nav/nav";
import Footer from "../footer/footer";
import { Col,Form, FormGroup, Label, Input,Container,Row } from 'reactstrap';
import Pic from "../../assets/doctor-character.jpg"
import ImgCard from "../imgCard/img"
import Modal from "../modal/modal"



class SingUp extends React.Component{
    
state={
    firstName:'',lastName:'',email:'',password:'',cpassword:'', age:'',address:'',city:'',gender:'',mnumber:'',regType:''
}

        // for each input to save data to the state variables;
      dataHandler = e => {
          this.setState({[e.target.name]:e.target.value})
      }
        // for each input Validation process;           
      validationHandler = e => {
          switch(e.target.id){
              case "firstName":
                if(this.state.firstName !== ""||null){
           return e.target.className = "form-control border-success"
        }
        else{
            e.target.className = "form-control border border-danger"
        }
        break;
              case "lastName":
                if(this.state.lastName !== ""||null){
           return e.target.className = "form-control border-success"
        }
        else{
            e.target.className = "form-control border border-danger"
        }
        break;
        case "email":
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if(this.state.email.match(valid)){
                    return e.target.className = "form-control border-success"
                 }
                 else{
                     e.target.className = "form-control border border-danger"
                 }
                 break;
        case "password":
            let validpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
                if(this.state.password.match(validpassword)){
                    return e.target.className = "form-control border-success"
                 }
                 else{
                     e.target.className = "form-control border border-danger"
                 }
                 break;
        case "cpw":
                if(this.state.cpassword === this.state.password){
                    return e.target.className = "form-control border-success"
                 }
                 else{
                     e.target.className = "form-control border border-danger"
                 }
                 break;
        case "Rt":
                if(this.state.regType !== null || undefined){
                    return e.target.className = "form-control border-success"
                 }
                 else{
                     e.target.className = "form-control border border-danger"
                 }
                 break;
        case "age":
                if(this.state.age !==  ""){
                    return e.target.className = "form-control border-success"
                 }
                 else{
                     e.target.className = "form-control border border-danger"
                 }
                 break;
        case "address":
                if(this.state.address !==  ""){
                    return e.target.className = "form-control border-success"
                 }
                 else{
                     e.target.className = "form-control border border-danger"
                 }
                 break;
        case "city":
                if(this.state.city !==  ""){
                    return e.target.className = "form-control border-success"
                 }
                 else{
                     e.target.className = "form-control border border-danger"
                 }
                 break;
        case "gender":
                if(this.state.gender !==  undefined){
                    return e.target.className = "form-control border-success"
                 }
                 else{
                     e.target.className = "form-control border border-danger"
                 }
                 break;
        case "mobileNumber":
            let phone = /^\d{11}$/
                if(this.state.mnumber.match(phone)){
                    return e.target.className = "form-control border-success"
                 }
                 else{
                     e.target.className = "form-control border border-danger"
                 }
                 break;
                 default:

          }
        
      }
    
      Submithandler = e => {
        e.preventDefault();
        // let obj = {
        //     firstName:this.state.firstName,
        //     lastName:this.state.lastName,
        //     Email:this.state.email,
        //     password:this.state.password,
        //     confirmpassword:this.state.cpassword,
        //     Age:this.state.age,
        //     Address:this.state.address,
        //     city:this.state.city,
        //     gender:this.state.gender,
        //     mobileNumber:this.state.mnumber,
        //     registationType:this.state.regType,
        // }
       

      }
      
    
    render() {

  const {firstName,lastName,email,password,cpassword,age,address,city,gender,mnumber,regType} = this.state;   

        return(

            <>
                <NavBar classes="bg-info" text="text-white"/>
            <Container>

    <Row>
    {/* form image start from here */}
        <Col md={6}>
        <ImgCard classes="my-5 rounded-2" src={Pic} />
        </Col>
            {/* form start from here */}
        <Col md={6}>
        <Form className="my-5" onSubmit={this.Submithandler}>
        <Row form>
        <Col md={6}>
        <FormGroup>
        <Label for="firstName">FirstName</Label>
            <Input required type="text" className="border" onChange={this.dataHandler} value={firstName} onMouseOut={this.validationHandler} name="firstName" placeholder="Type Your First Name" id="firstName"/>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="lastName">LastName</Label>
            <Input type="text" name="lastName" value={lastName} onChange={this.dataHandler} onMouseOut={this.validationHandler} placeholder="Type Your Last Name" id="lastName"/>
        </FormGroup>
        </Col>
        <Col md={12}>
        <FormGroup>
        <Label for="email">Email</Label>
            <Input type="email" name="email" value={email} onChange={this.dataHandler} onMouseOut={this.validationHandler} placeholder="Type Your Email" id="email"/>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="password">Password</Label>
            <Input type="password" onChange={this.dataHandler} value={password} onMouseOut={this.validationHandler} name="password" placeholder="Type Your Password" id="password"/>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="cpw">Confirm Password</Label>
            <Input type="password" onChange={this.dataHandler} value={cpassword} onMouseOut={this.validationHandler} name="cpassword" placeholder="Confirm Your Password" id="cpw"/>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="Rt">RegisterationType</Label>
            <Input type="select" name="regType" onChange={this.dataHandler} onClick={this.validationHandler} value={regType} id="Rt">
            <option value="User">User</option>
            <option value="Doctor">Doctor</option>
            <option value="Admin">Admin</option>
            </Input>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="age">Age</Label>
            <Input type="text" onChange={this.dataHandler} value={age} onMouseOut={this.validationHandler} name="age" placeholder="Type Your Age" id="age"/>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="address">Address</Label>
            <Input type="text" onChange={this.dataHandler} value={address} onMouseOut={this.validationHandler} name="address" placeholder="Type Your Address" id="address"/>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="city">City</Label>
            <Input type="text" onChange={this.dataHandler} value={city} onMouseOut={this.validationHandler} name="city" placeholder="Type Your City" id="city"/>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="gender">Select Gender</Label>
            <Input type="select" onChange={this.dataHandler} value={gender} onClick={this.validationHandler} name="gender"  id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
            </Input>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="mobileNumber">Mobile Number</Label>
            <Input type="text" onChange={this.dataHandler} value={mnumber} name="mnumber" onMouseOut={this.validationHandler} placeholder="Type Your Mobile Number" id="mobileNumber"/>
        </FormGroup>
        </Col>
        <Col md={12}>
        <FormGroup>
        <Input className="btn-success" type="submit" value="SingUp"/>
        </FormGroup>
        </Col>
           
        </Row>
    </Form>
        </Col>
    </Row>        
            
            <Modal />
                
            </Container>
            <Footer classes="bg-dark py-3"/>
            </>
        
        )
    }
}
 



export default connect(mapStateToProps, null)(SingUp);