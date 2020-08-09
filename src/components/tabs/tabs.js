import React, { Component } from 'react'
import DataBase from "../tabeldatabase/database";
import classnames from 'classnames';
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import firebase from '../../firebase';

export class tabs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTab: '1',
            name: '',
            profession: '',
        };
    }



    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // var userId = firebase.auth().currentUser.uid;
                firebase.database()
                    .ref('/users/').once('value')
                    .then((snapshot) => {
                        // let arr = snapshot.val();
                        // let hello = Object.keys(arr);
                        // let hello1 = Object.values(arr);

                        // let sd = hello1.map((item,i) => {

                        // })
                        
                    });



            } else {
                document.location = "/";
            }
        });
    }





    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    render() {

        const btn = [<button className="btn btn-info py-0">Confirm</button>, 
        <button className="btn btn-danger py-0">Cancel</button>]
        const th = ["FirstName", "LastName", "Email", "Age", "Options"];
        const td = ["Ali", "Raza", "ali@.com", 23, btn];

        return (
            <>
                <Nav tabs>
                    {/* first Confirm Appotiment Tab */}
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                        Aga Khan Data
            </NavLink>
                    </NavItem>
                    {/* Second Pending Appotiment Tab */}
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Pending Appotiment
            </NavLink>
                    </NavItem>
                    {/* Third Cancel Appotiment Tab */}
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Canceled Appotiment
            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>

                    {/* first Confirm Appotiment tab Contente */}
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12" xms="12" md="12">
                                <DataBase th={th} td={td} />
                            </Col>
                        </Row>
                    </TabPane>

                    {/* Second Pending Appotiment Tab Content */}

                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <h4>Tab 2 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>


                    {/* Third Cancel Appotiment Tab Content*/}

                    <TabPane tabId="3">
                        <Row>
                            <Col sm="6">
                                <h1>Tab 3 content</h1>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>

            </>
        )
    }
}

export default tabs
