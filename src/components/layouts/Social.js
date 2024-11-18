import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = ({ gap = "gap-4" }) => {
    return (
      <div className={`flex ${gap}`}>
        <a href="https://www.facebook.com/arttu.puttonen.14/"
           target="_blank"
           rel="noopener noreferrer">
        <span className="bannerIcon">
          <FaFacebookF />
        </span>
    </a>  
        <a       
          href="https://www.instagram.com/arddup"
          target="_blank"
          rel="noopener noreferrer">
        <span className="bannerIcon">
          <FaInstagram />
        </span>
        </a>    
        <a 
          href="https://www.linkedin.com/in/arttu-puttonen-733b9829b/"
          target="_blank"
          rel="noopener noreferrer">
        <span className="bannerIcon">
          <FaLinkedin />
        </span>
        </a>
        <a 
          href="https://github.com/ArttuPuttonen"
          target="_blank"
          rel="noopener noreferrer">
        <span className="bannerIcon">
          <FaGithub />
        </span>
        </a>
      </div>
    );
  };
  
  export default Social;