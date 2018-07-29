import React from 'react';
import { Field } from 'redux-form';
import { Col, FormGroup, Label, Input } from 'reactstrap';

let selectItem = (item) => {
  return (
    <option key={item} value={item}>{item}</option>
  )
}

let WdSelect = props => {
  const size = props.size || '4';
  return (
        <Col md={size} style={{ paddingRight: 5, paddingLeft: 5 }}>
          <FormGroup>
            <Label htmlFor={props.name}>{props.label}</Label>
            <Input
              tag={Field}
              type={'select'}
              name={props.name}
              component={'select'}
            >
              <option value="">Select {props.label}</option>
              {props.items && props.items.map((item)=> selectItem(item))}
            </Input>
          </FormGroup>
        </Col>)
}

export default WdSelect
