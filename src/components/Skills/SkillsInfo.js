import React from 'react';
import './SkillsInfo.css';
import html from '../../images/html.png';
import css from '../../images/css.png';
import javaScript from '../../images/javaScript.png';
import cSharp from '../../images/cSharp.png';
import java from '../../images/java.png';
import sql from '../../images/sql.png';
import react from '../../images/react.png';
import jQuery from '../../images/jQuery.png';
import PsLogo from '../../images/PsLogo.png';
import AiLogo from '../../images/AiLogo.png';
import XdLogo from '../../images/XdLogo.png';

function SkillsInfo() {
  return (
    <div>
      <div className='languageHead'>Programming Languages</div>
        <div className='languages' >
          <img src={html} width='100px' height='100px' alt='html logo'/>
          <img src={css} width='100px' height='100px' alt='css logo'/>
          <img src={javaScript} width='100px' height='100px' alt='js logo'/>
          <img src={cSharp} width='100px' height='100px' alt='cSharp logo'/>
          <img src={java} width='100px' height='100px' alt='java logo'/>
          <img src={sql} width='100px' height='100px' alt='sql logo'/>
          <img src={react} width='100px' height='100px' alt='react logo'/>
          <img src={jQuery} width='100px' height='100px' alt='jQuery logo'/>
        </div>
      <div className='graphicHead'>Graphic UX/UI Design</div>
        <div className='graphicPackages'>
          <img src={PsLogo} width='100px' height='100px' alt='Ps logo'/>
          <img src={AiLogo} width='100px' height='100px' alt='Ai logo'/>
          <img src={XdLogo} width='100px' height='100px' alt='Xd logo'/>
        </div>
    </div>
  );
}
export default SkillsInfo;
// Skills Info Function