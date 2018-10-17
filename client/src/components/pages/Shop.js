import React from "react";
import '../../App.css';
import '../../index.css'

const Shop = () => (
    <div>
      <section className="section section-lg bg-gradient-primary">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="display-3 text-white">Shop Our Collection<span>Curated For Your Skin Type</span></h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                <a className="btn btn-outline-danger" href="/shop/oily" role="button">Oily</a>
                </div>
                <div className="col-sm">
                <a className="btn btn-outline-info" href="/shop/dry" role="button">Dry</a>
                </div>
                <div className="col-sm">
                <a className="btn btn-outline-warning" href="/shop/combination" role="button">Combination</a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                <a className="btn btn-outline-success" href="/shop/normal" role="button">Normal</a>
                </div>
                <div className="col-sm">
                <a className="btn btn-outline-primary" href="/shop/sensitive" role="button">Sensitive</a>
                </div>
                <div className="col-sm">
                <a className="btn btn-outline-default" href="/shop/all" role="button">Shop All</a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
  
  export default Shop;