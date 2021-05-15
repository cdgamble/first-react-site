import React from 'react';
import './ButtonLink.css';

const STYLES = ['btnPrimary', 'btnOutline', 'btnTest'];
const SIZES = ['btnMedium', 'btnLarge'];

export const ButtonLink = ({onClick, buttonStyle, buttonSize}) => {
   const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

   return (
      <nav>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}>
        </button>
      </nav>
   );
};
// Button Link Function for the NavBar Hamburg Menu