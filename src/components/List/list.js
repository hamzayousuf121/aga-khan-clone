import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Lists = (props) => {
    const data = props.data || [
        "Aga Khan University Hospital Pakistan",
        "Aga Khan University Hospital Karachi, Main Campus",
        "Aga Khan Hospital for Women, Garden",
        "Aga Khan Hospital for Women, Karimabad",
        "Aga Khan Hospital for Women and Children, Kharadar",
        "Aga Khan Maternity and Child Care Centre, Hyderabad",
        "Outreach - Medical and Diagnostic Centres",
        "Outreach - Clinical Laboratories",
        "Outreach - Home Health Care"
      ]
    return(
        
        <ListGroup className="mb-5">
                  <label className="text-danger display-4 mt-3">{props.name || "Pakistan"}</label>
                {data.map((list,i) => <ListGroupItem key={i} tag="a" href="#">{list}</ListGroupItem>)}
        </ListGroup>
    )
}

export default Lists;