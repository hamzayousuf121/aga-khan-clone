import React from "react"
import { Container,Row, Col,CardImg ,
CardSubtitle,Card,CardBody ,Button, CardTitle} from 'reactstrap';
import Footer from "../footer/footer";
import userPic from "../../assets/man.png";
import Tabs from "../tabs/tabs";
import Userimg from "../../assets/hamza.jpg";
import firebase from '../../firebase';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          activeTab: '1',
          data:[],
          name: '',
          profession:'',
          myName:''
        };
        
      }

      

       logout = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            document.location = "/";
          });
      }
    
      

      componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=> {
          if (user) {
            localStorage.setItem("uid", user.uid);
            firebase
              .database()
              .ref('users/' + user.uid)
              .on("value", snapshot => {
                let userData = snapshot.val();
                if(userData !== null) {

                  this.setState({name:userData.name,profession:userData.regType})
                    }
                
              });
          } else {
            document.location = "/";
          }
        });
      }
      


    render() {
    
        return (
          
        <>

{/* Main content start from here  */}
        <Container className="my-5" xs="12" sm="12" lg="12" md="12">
            <Row>

        <Col xs="12" sm="12" md="3" lg="3" xl="3">
            {/* User Image,name  and detail  data style from here */}
        <Card>
        <CardImg className="bg-info" src={Userimg} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.state.name !== ""?this.state.name:"Name"}</CardTitle>
          <CardSubtitle className="mb-2">
            {this.state.profession !== ""?this.state.profession:"profession"}</CardSubtitle>
          <Button className="btn-danger" onClick={this.logout}>Logout</Button>
        </CardBody>
      </Card>
        </Col>

            {/* user data will appear here */}
        <Col xs="12" sm="12" md="9" lg="9" xl="9">

            
        <Nav tabs>
                    {/* first Confirm Appotiment Tab */}
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Confirm Appotiment
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
                    {/* <TabPane tabId="1">
                        <Row>
                            <Col sm="12" xms="12" md="12">
                                <DataBase th={th} td={td} />
                            </Col>
                        </Row>
                    </TabPane> */}

                    {/* Second Pending Appotiment Tab Content */}

                    {/* <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <h4>Tab 2 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane> */}

            </TabContent>
          
        </Col>
            </Row>
        </Container>


    {/* footer start here */}
    <Footer classes="bg-dark py-3" />
            </>
        )
    }
}

export default User
