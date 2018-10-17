import React from "react";
import '../../App.css';
import '../../index.css';
import '../utils/Products'
import Products from "../utils/Products";

const ShopCombination = () => (
    <div>
      <section className="section section-lg bg-gradient-primary">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="display-3 text-white">Combination Skin Type</h1>
            <p className="lead text-white">If your T-zone is often oily while your cheeks are dry, you have combination skin. Find the perfect balancing products here.</p>
          </div>
        </div>
      </section>
      <section>
        <Products/>
      </section>
    </div>
  );
  
  export default ShopCombination;