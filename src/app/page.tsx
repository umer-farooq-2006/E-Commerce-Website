import React from "react";
import "./style.css";
import TopHeader from "./Components/TopHeader/page";
import Header from "./Components/Header/page";
import FooterOne from "./Components/FooterOne/page";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="container-1">
        <div className="left-side">
          <h1 className="top">
            The furniture brand for the <br /> future, with timeless designs
          </h1>
          <button>View Collection</button>
          <h1 className="bottom">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </h1>
        </div>
        <div className="right-side">
          <img src="/Images/chair.jpg" className="image" />
        </div>
      </div>
      <div className="container-2">
        <div className="heading">
          <h1>What makes our brand different</h1>
        </div>
        <div className="boxes">
          <div className="box-1">
            <i className="bx bxs-truck"></i>
            <h1 className="box">Next day as standard</h1>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="box-2">
            <i className="bx bx-check-square"></i>
            <h1 className="box">Made by true artisans</h1>
            <p>Handmade crafted good made with real passion and craftmanship</p>
          </div>
          <div className="box-3">
            <i className="bx bx-folder"></i>
            <h1 className="box">Unbeatable prices</h1>
            <p>
              For our materials and quality you won't find better prices
              anywhere
            </p>
          </div>
          <div className="box-4">
            <i className="bx bxs-package"></i>
            <h1 className="box">Recycled packaging</h1>
            <p>
              We use 100% recycled pakaging to ensure our footprints is
              managable
            </p>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="heading">
          <h1>New Ceramics</h1>
        </div>
        <div className="images">
          <div className="img-box">
            <img src="/Images/chair.jpg" className="image" />
            <p>
              The Dandy Chair <br /> $250
            </p>
          </div>
          <div className="img-box">
            <img src="/Images/cups.jpg" className="image" />
            <p>
              Rustic Vase Set <br /> $155
            </p>
          </div>
          <div className="img-box">
            <img src="/Images/Jar.jpg" className="image" />
            <p>
              The Silky Vase <br /> $125
            </p>
          </div>
          <div className="img-box">
            <img src="/Images/Lap.jpg" className="image" />
            <p>
              The Lucy Lamp <br /> $399
            </p>
          </div>
        </div>
        <div className="button">
          <button>View Collection</button>
        </div>
      </div>
      <div className="container-4">
        <div className="heading">
          <h1>Our popular products</h1>
        </div>
        <div className="images">
          <div className="img-box">
            <img src="/Images/Sofa.jpg" className="image soffa" />
            <p>
              The popular suede sofa <br /> $980
            </p>
          </div>
          <div className="img-box">
            <img src="/Images/chair.jpg" className="image" />
            <p>
              The Dandy Chair <br /> $250
            </p>
          </div>
          <div className="img-box">
            <img src="/Images/chair2.jpg" className="image" />
            <p>
              The Dandy Chair <br /> $250
            </p>
          </div>
        </div>
        <div className="button">
          <button>View Collection</button>
        </div>
      </div>
      <div className="container-5">
        <div className="sub-container-5">
          <div className="heading">
            <h1>Join the club and get benefits</h1>
          </div>
          <div className="paragraph">
            <p>
              SignUp for our newsletter and receive exclusive offers on new
              <br /> ranges, sales, pop up stores and more
            </p>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="your@example.com"
              className="type"
            />
            <label>Sing up</label>
          </div>
        </div>
      </div>
      <div className="container-6">
        <div className="left-side">
          <h1>
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p>
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p>
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
        </div>
        <div className="rigt-side">
          <img src="/Images/bedroom.jpg" className="image" />
        </div>
      </div>
      <div>
        <button className="button-special">Get in touch</button>
      </div>
      <FooterOne />
    </div>
  );
};

export default Home;
