import React from 'react'
import { render } from 'react-dom';
import landing_logo from "../images/image17.PNG"
import './Landing.css';
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp';
function Lgn_click() {
  const addrss = document.getElementById('landing_user');
  render(<Login />, addrss);
}

function Snp_click() {
  const addrss = document.getElementById('landing_user');
  render(<SignUp />, addrss);
}

const Landing = () => {
  return (
    <div className='landing_bg'>
      <div className="navbar_logo">
        <img src={landing_logo} alt="" />
      </div>

      {/* <div className="landing_content"> */}
      {/*
        <div className='landing_profile'>
           <img className='landing_profilpic' src={landing_profile} alt="" /> 
            <h3 className='quote'>Unleash Your Creativity, Share your designs,arts etc</h3>
        </div>
         */}


      <div className='landing_user' id="landing_user">
        <h4 className='quote'>HAPPINESS IS...<br />CAPTURING SPECIAL MOMENTS<br />WITH YOUR CAMERA.</h4>
        <button type="button" className='custom__button' onClick={Lgn_click}>Login</button>
        <button type="button" className='custom__button' onClick={Snp_click}>SignUp</button>
      </div>

      {/* </div> */}

    </div>
  )
}

export default Landing
