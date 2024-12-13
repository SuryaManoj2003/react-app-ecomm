import "./about.css";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-section-1">
          <h1 className="about-main-heading">
            Ensuring happiness at every step
          </h1>
          <div className="about-section-1-1">
            <p className="about-section-1-text">
              Welcome to Shoner, where we don't just sell products; we craft
              experiences. Our mission is to transform the way you shop,
              blending innovation, convenience, and heart to empower lives, one
              transaction at a time.
            </p>
            <ul className="about-section-1-list">
              <li>Uncompromising quality</li>
              <li>For every customer, every time</li>
              <li>Innovative shopping adventures</li>
            </ul>
          </div>
        </div>
        <div className="about-display-image">
          <img
            src="https://assets-global.website-files.com/657c4832d6cfd790b2ed16a3/6582830b73456d96774f517f_about-image-04.jpg"
            alt="product"
          ></img>
        </div>
        <div className="icons">
          <div className="shipping">
            <i className="fa-solid fa-truck icon-1"></i>
            <h6>Free Shipping</h6>
          </div>
          <div className="delivery">
            <i className="fa-solid fa-hand-holding-dollar icon-2"></i>
            <h6>Cash On Delivery</h6>
          </div>
          <div className="policy">
            <i className="fa-solid fa-repeat icon-3"></i>
            <h6>Easy Return Policy</h6>
          </div>
          <div className="service">
            <i className="fa-solid fa-user-clock icon-4"></i>
            <h6>Customer Service</h6>
          </div>
        </div>

        <div className="mission-and-vision">
          <div className="our-mission">
            <h1>Our mission</h1>
            <p>
              We understand that life is fast-paced, and your time is at a
              premium. That's why we've woven the tapestry of our platform with
              effortless elegance and seamless grace, ensuring that navigating
              through our offerings is a smooth, almost magical experience.
            </p>
          </div>
          <div className="our-vision">
            <h1>Our vision</h1>
            <p>
              Our vision extends beyond style; we're committed to intertwining
              fashion with sustainability
            </p>
            <ul>
              <li>Creating timeless styles</li>
              <li>Personalized elegance for every occasion</li>
            </ul>
          </div>
        </div>
        <div className="founders">
          <div className="founders-image">
            <img
              src="https://assets-global.website-files.com/657c4832d6cfd790b2ed16a3/65816053561f8f93c3ea1423_about-image-03.jpg"
              alt="founder"
            ></img>
          </div>
          <div className="founders-section-1">
            <div className="founders-section-1-1">
              <h1>About founders</h1>
              <p>
                Pleasure and so read the was hope entire first decided the so
                must have as on was want up of I will rival in came this touched
                got a physics to traveling so all especially refinement
                monstrous desk they was arrange the overall helplessly out of
                particularly ill are purer
              </p>
            </div>
            <div className="founders-section-1-2">
              <div className="15k">
                <h1>15K+</h1>
                <p>
                  Each number in this milestone represents a satisfied customer.
                </p>
              </div>
              <div className="8">
                <h1>8+</h1>
                <p>
                  Each experience is a chapter in the grand story of Shoner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
