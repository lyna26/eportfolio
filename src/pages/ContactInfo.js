// ContactInfo.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles/homePage.css';

const ContactInfo = ({ iconSrc, altText, infoText }) => (
  <div className="container">
    <div className="row">  {/* Flexbox for alignment */}
        <div className="col-2">  {/* Icon in a column with right padding removal */}
          <img src={iconSrc} alt={altText}  className = "img-fluid"/>
        </div>
        <div className="col-10 text-left">  {/* Text in a column with left padding and left-aligned text */}
          <span>{infoText}</span>
        </div>
    </div>
  </div>
);

ContactInfo.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  infoText: PropTypes.string.isRequired,
};

export default ContactInfo;