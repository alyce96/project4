import React, { Component } from "react";
import rose from './rose.svg'
class How extends Component {
  render() {
    return (
    
        <img alt="picking romance" src={rose} />
    
      <div>
        <h2>How we help you find the one</h2>
        <p>Match finder is a dating wesbite that values
            the old school style of dating. We match users 
            up and set them up on dates in our buildings to 
            provide a safe expirence.
        </p>
 
        <p>Price of all dates are included in service</p>
      </div>
    );
  }
}
 
export default How;