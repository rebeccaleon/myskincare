import React from "react";

const Home = () => (
  <div>
    <section class="section section-lg bg-gradient-primary">
      <div class="container">
        <div class="col-lg-8">
          <h1 class="display-3 text-white">myskincare<sup>&copy;</sup> <span> Make your skin happy</span></h1>
          <p class="lead text-white">Skincare is an evolving personal journey and we’re here to guide you along the way.</p>
          <div class="btn-wrapper">
            <a href="/skinquiz" class="btn btn-info mb-3 mb-sm-0">
              <span class="btn-inner--text">Take the Quiz</span>
            </a>
            <a href="/shop" class="btn btn-white mb-3 mb-sm-0">
              <span class="btn-inner--text">Skincare Shop</span>
            </a>
            </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;