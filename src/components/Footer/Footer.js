import React from "react";
import images from "../../data/cardImage";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="hero mt-5">
        <p className="pt-4 pb-4">
          267,435,678 stocks photos, 360 &#176; panoramic images ,vectors and
          videos
        </p>
      </div>
      <div className="container-fluid footer-sec">
        <div className="col-md-8 col-sm-12 m-auto ">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <h6>Buying from Alamy</h6>
              <p>
                <a href="!#">Licenses and pricing</a>
              </p>
              <p>
                <a href="!#">Browse by catagory</a>
              </p>
              <p>
                <a href="!#">Enterprise</a>
              </p>
              <p>
                <a href="!#">Fresh picks</a>
              </p>
              <p>
                <a href="!#">Premium stock videos</a>
              </p>
              <p>
                <a href="!#">Live news feed</a>
              </p>
              <p>
                <a href="!#">Customer help</a>
              </p>
              <p>
                <a href="!#">Apply for credit account</a>
              </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h6>Selling with Alamy</h6>
              <p>
                <a href="!#">Become a contributor</a>
              </p>
              <p>
                <a href="!#">contributor homepage</a>
              </p>
              <p>
                <a href="!#">Stockimo</a>
              </p>
              <p>
                <a href="!#">contributor contact</a>
              </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h6>Company</h6>
              <p>
                <a href="!#">Blog</a>
              </p>
              <p>
                <a href="!#">About us</a>
              </p>
              <p>
                <a href="!#">Carrers</a>
              </p>
              <p>
                <a href="!#">Become n affillate</a>
              </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h6>Get in Touch</h6>
              <p>
                <a href="!#">Contact us</a>
              </p>
              <p>
                <a href="!#">Customers</a>
              </p>
              <p>
                <a href="!#">sales@alamy.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 m-auto social">
          <div className="social-icons-cards mt-5">
            <div className="row">
              <div className="col-md-6 col-sm-12 icons">
                <a href="!#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="!#">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="!#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="!#">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="!#">
                  <i className="bi bi-pinterest"></i>
                </a>
                <a href="!#">
                  {" "}
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              <div className="col-md-6 col-sm-12 cards">
                <div className="img-container">
                  {images.map((img) => (
                    <a key={img.id} href="!#">
                      <img src={img.img} alt={img.title} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <p>Terms and condition-Copyright complaints-Sitemap</p>
            <span>
              Alamy and its logo are trademarks of Alamy Ltd. and are registered
              in certain countries. Copyright &copy; 05/08/2021 Alamy Ltd.All
              right reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
