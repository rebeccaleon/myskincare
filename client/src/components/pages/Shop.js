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
                <a class="btn btn-outline-danger" href="/shop/oily" role="button">Oily</a>
                </div>
                <div class="col-sm">
                <a class="btn btn-outline-info" href="/shop/dry" role="button">Dry</a>
                </div>
                <div class="col-sm">
                <a class="btn btn-outline-warning" href="/shop/combination" role="button">Combination</a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                <a class="btn btn-outline-success" href="/shop/normal" role="button">Normal</a>
                </div>
                <div class="col-sm">
                <a class="btn btn-outline-primary" href="/shop/sensitive" role="button">Sensitive</a>
                </div>
                <div class="col-sm">
                <a class="btn btn-outline-default" href="/shop/all" role="button">Shop All</a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
  
  export default Shop;