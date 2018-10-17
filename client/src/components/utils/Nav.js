import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-default">
  <div className="container">
    <a className="navbar-brand" href="/">myskincare</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar-primary">
      <div className="navbar-collapse-header">
        <div className="row">
          <div className="col-6 collapse-brand">
            <a href="index.html"></a>
          </div>
          <div className="col-6 collapse-close">
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
  
  export default Nav;
  