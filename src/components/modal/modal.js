import React from 'react';
import {Modal,ModalBody,} from 'reactstrap';


class ModalView extends React.Component {
    state = {
        modal: false,
        backdrop: true
    }

    // toggleModel= ()  => {
    //     this.setState(prevState => ({
    //       modal: !prevState.modal
    //     }));
    //   }
    render() {
        return (
            <>
      
      {/* <Button className="btn-info py-0" onClick={this.toggleModel}>{this.props.btnName || "View"}</Button> */}
    
    <Modal className="text-center mt-5" isOpen={this.props.modal} backdrop={true}>
      <ModalBody>
        {this.props.data}
        <h3 className="text-bold text-success">{this.props.text?this.props.text:"SuccessFully Registered"}</h3>
      </ModalBody>
    </Modal>
    
    </>
        )
    }
}

export default ModalView;
