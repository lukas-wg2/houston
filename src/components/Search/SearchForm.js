import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { getTextType } from '../../helpers';

export class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'havard.noren@telenordigital.com', //'vihang.patil@telenordigital.com'
    };
  }
  getValidationState() {
    const type = getTextType(this.state.value);
    if (type === 'phonenumber' || type === 'email') return 'success'
    const length = this.state.value.length;
    if (length > 5) return 'warning';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    //handle form processing here....
    console.log("SearchForm On Submit")
    this.props.onSubmit(this.state.value)
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.onSubmit}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Search user by phone number or email</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button bsStyle="primary" type="submit">Search</Button>
        </Form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
