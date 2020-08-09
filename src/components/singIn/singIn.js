import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import firebase from "../../firebase";
import Footer from "../footer/footer";
import "./form.css";

export default class singIn extends Component {
  state = { name: "", email: "", password: "" };

  valueHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    // firebase

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        console.log(success);
        this.setState({ email: "", password: "" });
        document.location = "./User";
      })
      .catch(error => {
        document.location = "/";
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12} lg={12} xl={12} sm={12} xs={12}>
              <Row form>
                <div id="login-box">
                  <Col md={12}>
                    <div className="left">
                      <h1>Sign In</h1>

                      <form onSubmit={this.login}>
                        <input
                          value={this.state.email}
                          type="email"
                          name="email"
                          onChange={this.valueHandler}
                          placeholder="E-mail"
                        />
                        <input
                          value={this.state.password}
                          onChange={this.valueHandler}
                          type="password"
                          name="password"
                          placeholder="Password"
                        />

                        <input
                          type="submit"
                          name="signup_submit"
                          value="SignIn"
                          className="text-center"
                        />
                      </form>
                    </div>
                  </Col>

                  <Col>
                    <div className="right d-none d-lg-block d-sm-block">
                      <span className="loginwith">
                        Sign in with
                        <br />
                        social network
                      </span>

                      <button className="social-signin facebook">
                        Log in with facebook
                      </button>
                      <button className="social-signin twitter">
                        Log in with Twitter
                      </button>
                      <button className="social-signin google">
                        Log in with Google
                      </button>
                    </div>
                  </Col>
                  <div className="or d-none">OR</div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer classes="bg-dark py-3" />
      </div>
    );
  }
}
