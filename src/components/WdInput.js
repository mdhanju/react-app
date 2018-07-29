import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Col, FormGroup, Label, Input } from 'reactstrap';

class WdInput extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    handleBlur = (event) => {
      const value = event.currentTarget.value;
      if (value) {
        this.props.handleBlur(event.currentTarget.value);
      }
    }

    render() {
      const size = this.props.size || '4';
      const placeholder = this.props.placeholder || this.props.label;
      return (
            <Col md={size}
              style={{ paddingRight: 5, paddingLeft: 5 }}>
              <FormGroup>
                <Label htmlFor={this.props.name}>{this.props.label}</Label>
                <Input
                  tag={Field}
                  type={'input'}
                  name={this.props.name}
                  component={'input'}
                  placeholder={placeholder}
                  onBlur={this.handleBlur}
                />
              </FormGroup>
            </Col>)
    }
}

WdInput.propTypes = {
  handleBlur: PropTypes.func
};

WdInput.defaultProps = {
  handleBlur: () => {}
};

export default WdInput
