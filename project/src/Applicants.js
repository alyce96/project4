import React, { Component } from "react";
import heart from './heart.svg'

class Applicants extends Component {
  render() {
    return (
      <div>
        <>
        <img alt="Love is in the air" src={heart} />
        </>
        <h2>Applicants</h2>
        <p>Before going on a date users must 
            communicate over a two week period. 
            We match based on:
        </p>
        <ol>
          <li>Physical Request</li>
          <li>Personaliy</li>
          <li>Job</li>
          <li>Goals</li>
          <li>Belifs</li>
        </ol>
      </div>
    );
  }
}
 
export default Applicants;