import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAppoinment } from '../../actions/appoinments';
import AppoinmentForm from './AppoinmentForm';

class AppoinmentCreate extends Component {
  onSubmit = formValues => {
    this.props.addAppoinment(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <AppoinmentForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addAppoinment }
)(AppoinmentCreate);