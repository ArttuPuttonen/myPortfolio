import React from 'react';

const TextLogo = ({ pb = "3" }) => {
    return (
        <div className={`${pb}`}>
        <h3 className="font-bold">ARTTU</h3>
        <h3 className="text-designColor font-bold">PUTTONEN</h3>
        </div>
    );
  };
  
  export default TextLogo;