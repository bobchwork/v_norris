import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer__message">
        GOT JOKES? GET PAID
        <br />
        FOR SUBMITTING!
      </p>
      <span className="footer__submit">
        <h3>SUBMIT JOKE</h3>
        <img src={`${process.env.REACT_APP_BASE_PATH}/images/arrow-r.png`} alt="submit joke" />
      </span>
    </div>
  </footer>
);

export default Footer;
