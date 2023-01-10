import React from 'react'
import './SignUp.css';
import { render } from 'react-dom';
import Login from '../Login/Login';
function Lgn_click() {
      const addrss = document.getElementById('landing_user');
      render(<Login />, addrss);
}


const SignUp = () => {
      return (
            <div class="container">
                  <div class="screen">
                        <div class="screen__content">
                              <form class="SignUp">
                                    <div class="SignUp__field">
                                          <i class="SignUp__icon fas fa-user"></i>
                                          <input type="text" class="SignUp__input" placeholder="Username" />
                                    </div>
                                    <div class="SignUp__field">
                                          <i class="SignUp__icon fas fa-user"></i>
                                          <input type="text" class="SignUp__input" placeholder="Email" />
                                    </div>
                                    <div class="SignUp__field">
                                          <i class="SignUp__icon fas fa-lock"></i>
                                          <input type="password" class="SignUp__input" placeholder="Password" />
                                    </div>
                                    <div class="SignUp__field">
                                          <i class="SignUp__icon fas fa-lock"></i>
                                          <input type="password" class="SignUp__input" placeholder="Confirm Password" />
                                    </div>
                                    <button class="button SignUp__submit">
                                          <span class="button__text">SignUp Now</span>
                                          <i class="button__icon fas fa-chevron-right"></i>
                                    </button>
                                    <button class="button SignUp__submit" onClick={Lgn_click} >
                                          <span class="button__text">Login</span>
                                          <i class="button__icon fas fa-chevron-right"></i>
                                    </button>
                              </form>
                              <div class="social-SignUp">
                                    <h3>SignUp via</h3>
                                    <div class="social-icons">
                                          <a href="/" class="social-SignUp__icon fab fa-instagram">a</a>
                                          <a href="/" class="social-SignUp__icon fab fa-facebook">b</a>
                                          <a href="/" class="social-SignUp__icon fab fa-twitter">c</a>
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

export default SignUp