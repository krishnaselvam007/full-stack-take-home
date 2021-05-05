import React, { useState, useEffect, Component } from "react";
import "./App.css";
import logo from "./logo.svg";

import { fetchClinicians } from "./clinicians/requests";
import { getAppoinments } from "../actions/appoinments";
import Dashboard from './appoinments/Dashboard';
import { Provider } from 'react-redux'; 
import store from '../store';

function App() {
  const [clinicians, setClinicians] = useState(null);
  useEffect(() => {
    async function getClinicians() {
      const clinicianData = await fetchClinicians();
      setClinicians(clinicianData);
    }

    getClinicians();
  }, []);
  const [appoinments, setAppoinments] = useState(null);
  useEffect(() => {
    async function getAppoinment() {
      const appoinmentData = getAppoinments();
      setAppoinments(appoinmentData);
    }

    getAppoinment();
  }, []);
  
    return (
      <div>
      <Provider store={store}>
        <Dashboard />
      </Provider>
      <div className="App">
      <div className="logo-wrapper">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="instructions">
        <h2>Welcome to Firefly's Take Home Interview</h2>
        <p>For the front-end portion, please implement two components</p>
        <ul>
          <li>
            A component that lets you book an appointment, based on clinician
            availability.
          </li>
          <li>
            A component that displays the appointments that are currently
            scheduled. This should also allow scheduled appointments to be
            cancelled.
          </li>
        </ul>
      </div>
      <pre className="response">{JSON.stringify(clinicians, null, 2)}</pre>
      <pre className="response">{JSON.stringify(appoinments, null, 0)}</pre>
    </div>
    </div>
    );
      
}


export default App;
