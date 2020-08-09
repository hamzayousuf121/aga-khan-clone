import React, { Component } from 'react'
import { Col,Container,Row } from 'reactstrap';
import Footer from '../footer/footer';
import firebase from '../../firebase';


export default class singup extends Component {

  state={name:'',email:'',password:''}

valueHandler = (e) => {
this.setState({[e.target.name]:e.target.value})
}






 signUp = (event) =>{
   event.preventDefault()
    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;
    
    
    // firebase
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        console.log(`users/${user.user.uid}`)
        firebase.database().ref(`/users/${user.user.uid}`).set({
          name,
          email,
          uid : user.user.uid,
          password
       }).then((success) => {
         this.setState({name:'',email:'',password:''})
         document.location = "/login"
           
       })
        })

}






    render() {
        return (
            <>
                 {/* form start from here */}
 <Container>
   <Row>
                 
    <Col md={12} lg={12} xl={12} sm={12} xs={12} >
         
            <Row form>
      
            <div id="login-box">
<Col md={12}>
  <div className="left">
    <h1>Register</h1>
    
    <form onSubmit={this.signUp}>
    <input onChange={this.valueHandler} value={this.state.name} type="text" name="name" placeholder="Username" />
    <input onChange={this.valueHandler} value={this.email} type="email" name="email" placeholder="E-mail" />
    <input onChange={this.valueHandler} value={this.password} type="password" name="password" placeholder="Password" />
    
    
    <input type="submit" className="text-center" name="signup_submit" value="Register" />
    </form>
  </div>
  </Col>
  
  <Col>
  <div className="right d-none d-lg-block d-sm-block">
    <span className="loginwith">Sign in with<br />social network</span>
    
    <button className="social-signin facebook">Log in with facebook</button>
    <button className="social-signin twitter">Log in with Twitter</button>
    <button className="social-signin google">Log in with Google</button>
  </div>
  </Col>
  <div className="or d-none">OR</div>
  
</div>

         
            </Row>
                
    </Col>
  </Row>    
</Container>
             <Footer classes="bg-dark py-3"/>
               
            </>
        )
    }
}


