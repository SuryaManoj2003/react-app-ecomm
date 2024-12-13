import { BrowserRouter, Link } from "react-router-dom";

import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-section-1">
        <div className="image-container-1">
          <img
            src="https://assets-global.website-files.com/657c4832d6cfd790b2ed16a3/6581401481322879a8b22e5e_insta-image-02.jpg"
            alt="product"
          ></img>
        </div>
        <div className="image-container-2">
          <img
            src="https://assets-global.website-files.com/657c4832d6cfd790b2ed16a3/65813f928164247f73db177f_insta-image-01.jpg"
            alt="product"
          ></img>
          <h2>@Shoner</h2>
        </div>
        <div className="image-container-3">
          <img
            src="https://cdn.prod.website-files.com/657c4832d6cfd790b2ed16a3/6581435f422e8347c5cb0b3e_insta-image-03.jpg"
            alt="product"
          ></img>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-container-1">
          <h1>SHONER</h1>
          <p>
            We sell footwear intended to protect and comfort the human foot so
            they are often worn with a sock
          </p>
        </div>
        <div className="footer-links-container footer-container-2">
          <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="products">Products</Link>
          </BrowserRouter>
        </div>
        <div className="footer-container-3 footer-links-container">
          <BrowserRouter>
            <Link>FAQs</Link>
            <Link>Privacy Policy</Link>
            <Link>Coming Soon</Link>
            <Link>Password Protected</Link>
            <Link>Error 404</Link>
          </BrowserRouter>
        </div>
        <div className="footer-container-4 footer-links-container">
          <BrowserRouter>
            <Link>Style Guide</Link>
            <Link>Instructions</Link>
            <Link>Licenses</Link>
            <Link>Changelog</Link>
            <Link>Link In Bio</Link>
          </BrowserRouter>
        </div>
        <div className="footer-container-5 address">
          <p>+236 789 952</p>
          <p>hello@example.com</p>
          <p>Montego Bay Bermuda Dunes Cir Indio, California(CA), 92203</p>
        </div>
      </div>
    </>
  );
}
