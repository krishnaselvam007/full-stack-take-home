import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup  } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class AppoinmentForm extends Component {
  renderField = ({ input, label, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {touched && error && (
          <span className='ui pointing red basic label'>{error}</span>
        )}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'    >
          <>
            {['Clinician', 'Availability Slot', 'Patient'].map(
                (variant) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={variant}
                        id={`dropdown-variants-${variant}`}
                        variant={variant.toLowerCase()}
                        title={variant}
                    >
                        <Dropdown.Item eventKey="1">Action </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action </Dropdown.Item>/n
                        <Dropdown.Item eventKey="3" active>Active Item </Dropdown.Item>                        
                    </DropdownButton>
                ),
            )}
           </>
          <button className='ui primary button'>Create Appoinment</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.clinician) {
    errors.clinician = 'Please enter at least 1 character';
  }

  return errors;
};

export default reduxForm({
  form: 'appoinmentForm',
  touchOnBlur: false,
  validate
})(AppoinmentForm);