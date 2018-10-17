import React, { Component } from "react";
import '../../App.css';
import '../../index.css'

const Shop = () => (
    <div>
      <section class="section section-lg bg-gradient-primary">
        <div class="container">
          <div class="col-lg-8">
            <h1 class="display-3 text-white">Shop Our Collection<span>Curated For Your Skin Type</span></h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <span>Oily</span>
                </div>
                <div class="col-sm">
                    <span>Dry</span>
                </div>
                <div class="col-sm">
                    <span>Combination</span>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <span>Normal</span>
                </div>
                <div class="col-sm">
                    <span>Sensitive</span>
                </div>
                <div class="col-sm">
                    <span>Shop All</span>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
  
  export default Shop;