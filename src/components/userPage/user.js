import React from "react"
import { Container,Row, Col,CardImg ,Card,CardBody ,Button, CardTitle} from 'reactstrap';
import Footer from "../footer/footer";
// import userPic from "../../assets/man.png";
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
    // const serverResponce = "";
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
          <Button className="btn-danger" onClick={this.logout}>Logout</Button>
        </CardBody>
      </Card>
        </Col>

            {/* user data will appear here */}
        <Col xs="12" sm="12" md="9" lg="9" xl="9">

            <Tabs />
          
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
