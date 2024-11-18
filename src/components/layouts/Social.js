import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = ({ gap = "gap-4" }) => {
    return (
      <div className={`flex ${gap}`}>
        <span className="bannerIcon">
          <FaFacebookF />
        </span>
        <span className="bannerIcon">
          <FaInstagram />
        </span>
        <span className="bannerIcon">
          <FaLinkedin />
        </span>
        <span className="bannerIcon">
          <FaGithub />
        </span>
      </div>
    );
  };
  
  export default Social;