import React, { Component } from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom"; 
import Applicants from "./Applicants";
import Dates from "./Dates";
import How from "./How";
import Saftey from "./Saftey";



class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Match Finder</h1>
          <ul className="header">
          <li><NavLink to="/">How</NavLink></li>
            <li><NavLink to="/dates">Dates</NavLink></li>
            <li><NavLink to="/applicants">Applicants</NavLink></li>
            <li><NavLink to="/saftey">Saftey</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path ="/" element={<How />}/>
            <Route path="stuff" element={<Dates />}/>
            <Route path="/Applicants" element={<Applicants />}/>
            <Route path="/Saftey" element={<Saftey />}/>
          </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;