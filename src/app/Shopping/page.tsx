import FooterOne from "../Components/FooterOne/page";
import Header from "../Components/Header/page";
import TopHeader from "../Components/TopHeader/page";
import "./style.css";

import React from "react";

const Shopping = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="container-1">
        <div className="sub-container-1">
          <div className="heading">
            <h1>Your Shopping Cart</h1>
          </div>
          <div className="PQT">
            <ul>
              <li>Product</li>
              <li>Quantity</li>
              <li>Total</li>
            </ul>
          </div>
          <hr />
          <div className="section-1">
            <div className="paragraph-1">
              <div className="left-side">
                <img src="/Images/Jar.jpg" />
              </div>
              <div className="right-side">
                <h1>Graystone vase</h1>
                <p className="one">
                  A timeless ceramic vase with <br /> a tri color grey glaze.
                </p>
                <p className="two">£85</p>
              </div>
            </div>
            <div className="paragraph-2">
              <p>1</p>
            </div>
            <div className="paragraph-3">
              <p>£85</p>
            </div>
          </div>
          <div className="section-2">
            <div className="paragraph-1">
              <div className="left-side">
                <img src="/Images/Pot.jpg" />
              </div>
              <div className="right-side">
                <h1>Basic white vase</h1>
                <p className="one">
                  Beautiful and simple this is <br /> one for the classics
                </p>
                <p className="two">£125</p>
              </div>
            </div>
            <div className="paragraph-2">
              <p>1</p>
            </div>
            <div className="paragraph-3">
              <p>£125</p>
            </div>
          </div>
          <hr />
          <div className="section-3">
            <div className="paragraph-right">
              <div className="one">
                <h1 className="heading-1">Subtotal</h1>
                <h1 className="heading-2">£210</h1>
              </div>
              <div className="two">
                <p>Taxes and shipping are calculated at checkout</p>
              </div>
              <div className="three">
                <button>Go to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne/>
    </div>
  );
};

export default Shopping;
