import React, { Component } from 'react';
import AppoinmentList from './AppoinmentList';
import AppoinmentCreate from './AppoinmentCreate';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>AppoinmentList Management</div>
        <AppoinmentCreate />
        <AppoinmentList />
      </div>
    );
  }
}

export default Dashboard;