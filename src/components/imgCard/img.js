import React from "react"

import {CardImg} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
        <CardImg className={props.classes} width="100%" src={props.src} alt="Card image cap" />
    </div>
  );
};

export default Example;