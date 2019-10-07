import React from 'react';

const Footer = () => {
    return (  
        <footer id="contact" className="footer">
        <div className="footer__row">
          <div className="footer__content">
            <img src="./img/logo-white.png" alt="logo white" />
            <p className="margin-bottom-small margin-top-small">
              At our core is a collection of design and development
              solutions that represent everything your business needs
              to compete in the modern marketplace.
            </p>
            <strong className="heading-h4">Our Location</strong>
            <p className="margin-bottom-small">100 Street Name <br />
                Our City, AA 10000</p>
            <strong className="heading-h4">Contact Info</strong>
            <p className="margin-bottom-small">(888) 888-8888 <br />
                email@nuno.com</p>
            <a href="#"><i className="fab fa-facebook-square"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-reddit-square"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="footer__form-box">
            <h3 className="margin-bottom-small">Contact Us</h3>
            <form id="form">
                  <input className="form-control" type="text" id="form_name" name="name" placeholder="Enter your name." required="required" />
                  <input className="form-control" type="email" id="form_email" name="email" placeholder="Enter your email." required="required" />
                  <textarea className="form-control" id="form_message" name="message" placeholder="Add your message." rows="4" required="required"></textarea>
                  <input type="submit" className="submit-white" value="Send Message" />
            </form>
          </div>
          <div className="socket">
            <hr />
            &copy; Custom Theme.
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;
