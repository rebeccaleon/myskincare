import React from "react";
import '../../App.css';
import '../../index.css';
import Products from "../utils/Products";


const ShopNormal = () => (
    <div>
      <section className="section section-lg bg-gradient-primary">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="display-3 text-white">Normal Skin Type</h1>
            <p className="lead text-white">A normal skin type may typically never complain about having a greasy face, except maybe on a hot summer day when they have an oily T-zone. If that's your case, find your product soulmates here.</p>
          </div>
        </div>
      </section>
      <section>
        <Products/>
      </section>
    </div>
  );
  
  export default ShopNormal;