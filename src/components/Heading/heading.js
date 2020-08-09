import React from 'react';
import { Jumbotron, Button } from 'reactstrap';


const Heading = (props) => {
    return (
    <Jumbotron className={props.classes}>
        <h1 className={props.h1}>{props.title}</h1>
        <p className="lead">{props.content}</p>
        {props.btnTitle?<p className="lead"><Button color="primary">{props.btnTitle}</Button></p>:null}
      </Jumbotron>
    )
}

export default Heading;