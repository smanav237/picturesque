import React from 'react'
import { render } from 'react-dom';
import './Login.css';
import SignUp from '../SignUp/SignUp';


function Snp_click() {
      const addrss = document.getElementById('landing_user');
      render(<SignUp />, addrss);
}


const Login = () => {
      return (
            <div class="container">
                  <div class="screen">
                        <div class="screen__content">
                              <form class="login">
                                    <div class="login__field">
                                          <i class="login__icon fas fa-user"></i>
                                          <input type="text" class="login__input" placeholder="User name / Email" />
                                    </div>
                                    <div class="login__field">
                                          <i class="login__icon fas fa-lock"></i>
                                          <input type="password" class="login__input" placeholder="Password" />
                                    </div>
                                    <button class="button login__submit">
                                          <span class="button__text">Log In Now</span>
                                          <i class="button__icon fas fa-chevron-right"></i>
                                    </button>
                                    <button class="button login__submit" onlick={Snp_click}>
                                          <span class="button__text">SignUp</span>
                                          <i class="button__icon fas fa-chevron-right"></i>
                                    </button>
                              </form>
                              <div class="social-login">
                                    <h3>log in via</h3>
                                    <div class="social-icons">
                                          <a href="/" class="social-login__icon fab fa-instagram">a</a>
                                          <a href="/" class="social-login__icon fab fa-facebook">b</a>
                                          <a href="/" class="social-login__icon fab fa-twitter">c</a>
                                    </div>
                              </div>
                        </div>
                        <div class="screen__background">
                              <span class="screen__background__shape screen__background__shape4"></span>
                              <span class="screen__background__shape screen__background__shape3"></span>
                              <span class="screen__background__shape screen__background__shape2"></span>
                              <span class="screen__background__shape screen__background__shape1"></span>
                        </div>
                  </div>
            </div>
      )
}

export default Login