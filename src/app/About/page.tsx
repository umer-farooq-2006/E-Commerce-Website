import FooterTwo from "../Components/FooterTwo/page";
import TopHeader2 from "../Components/TopHeader2/page";
import "./style.css";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <TopHeader2 />
      <nav className="nav-2">
        <div className="menu">
          <div className="heading">
            <h1>Avion</h1>
          </div>
          <div className="nav-icons">
            <ul className="list-1">
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
            <ul className="list-2">
              <li>
                <i className="bx bx-search-alt-2"></i>
              </li>
              <li>
                <Link href="./Shopping"><i className="bx bx-cart-alt"></i></Link>
              </li>
              <li>
                <Link href="./About"><i className="bx bx-info-circle"></i></Link>
              </li>
              <li>
                <Link href="./Products"><i className="bx bx-shopping-bag"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="nav-3">
        <div className="menu">
          <ul>
            <li>All products</li>
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
          </ul>
        </div>
      </nav>
      <div className="container-1">
        <div className="container-1-text">
          <h1>
            A brand built on the love of craftmanship, <br />
            quality and outstanding customer service
          </h1>
          <button>View our products</button>
        </div>
      </div>
      <div className="container-2">
        <div className="container-2-images">
          <div className="box-1">
            <h1>It started with a small idea</h1>
            <p>
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
            <button>View collection</button>
          </div>
          <div className="box-2">
            <img src="/Images/room.jpg" />
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="sub-container-3">
          <div className="box-1">
            <img src="/Images/door.jpg" />
          </div>
          <div className="box-2">
            <h1>
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
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
            <button>Get in touch</button>
          </div>
        </div>
      </div>
      <div className="container-4">
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
      <FooterTwo />
    </div>
  );
};

export default About;
