import React from 'react'
import './Navbar.css';

const Navbar=()=> {
  return (
    <div className="head_nav">
    
    <div className="navbar_logo">
      heeelllllooooo
    </div>
    
    

  <div className="navbar_features">
    <ul className="navbar_items">
      <li className="nav-item ">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Feed</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Upload</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/">Add Friend</a>
      </li>
    </ul>
  </div>


  <div className="user_id_logo">
    ememememememem
  </div>
    </div>
  );
};

export default Navbar