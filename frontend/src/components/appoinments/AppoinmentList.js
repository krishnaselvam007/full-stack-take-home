import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAppoinments } from '../../actions/appoinments';

class AppoinmentList extends Component {
  componentDidMount() {
    this.props.getAppoinments();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.appoinments.map(appoinment => (
          <div className='item' key={appoinment.id}>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>{appoinment.availability}</a>
              <div className='description'>{appoinment.clinician}</div>
              <div className='description'>{appoinment.patient}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    appoinments: Object.values(state.appoinments)
});

export default connect(
  mapStateToProps,
  { getAppoinments }
)(AppoinmentList);