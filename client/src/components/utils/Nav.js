import React from 'react';

const Nav = () => (
  <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
  <div className="container">
  <a class="navbar-brand" href="/">myskincare</a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbar_global">
      <div className="navbar-collapse-header">
        <div className="row">
          <div className="col-6 collapse-brand">
            <a href="./index.html">
            </a>
          </div>
          <div className="col-6 collapse-close">
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <ul className="navbar-nav navbar-nav-hover ml-lg-auto">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link" data-toggle="dropdown" href="#" role="button">
            <i className="ni ni-collection d-lg-none"></i>
            <span className="nav-link-inner--text">Account</span>
          </a>
          <div className="dropdown-menu">
            <a href="/signup" className="dropdown-item">Sign Up</a>
            <a href="/login" className="dropdown-item">Login</a>
            <a href="/profile" className="dropdown-item">Profile</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link" data-toggle="dropdown" href="#" role="button">
            <i className="ni ni-ui-04 d-lg-none"></i>
            <span className="nav-link-inner--text">Skincare Quiz</span>
          </a>
          <div className="dropdown-menu dropdown-menu-xl">
            <div className="dropdown-menu-inner">
              
                <div className="media-body ml-3">
                  <h5 className="heading text-warning mb-md-1"><a href="/skinquiz">Get Started!</a></h5>
                </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
  
  export default Nav;
  