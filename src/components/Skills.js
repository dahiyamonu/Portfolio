import React from 'react'
import '../components/Home.css'

import Html from '../Images/html-logo.png';
import Css from '../Images/css-logo.png';
import Javascript from '../Images/Js-logo.png';
import Reactjs from '../Images/React-logo.jpeg';
import Python from '../Images/Python-Logo.png';
import Nodejss from '../Images/Nodejs-logo.png';
import Github from '../Images/github-logo.jpg';
import ms from '../Images/ms-logo.png';
import Sql from '../Images/Sql-logo.jpeg';

function Profiles() {
  return (
    <div className="portfolio">
      <div className="header">
        <div className="page-number">
          <span className="plus-sign">+</span>
          <span>PAGE 04</span>
        </div>
      </div>
      <div className="skills-title">WHAT I CAN DO...!!!</div>
      <div className='container-s-1'>
        <div className="skill">
          <img src={Html} alt="HTML" />
          <p><a href="https://en.wikipedia.org/wiki/HTML">HTML</a></p>
        </div>
        <div className="skill">
          <img src={Css} alt="CSS" />
          <p><a href="https://en.wikipedia.org/wiki/CSS">CSS</a></p>
        </div>
        <div className="skill">
          <img src={Javascript} alt="SASS" />
          <p><a href="https://en.wikipedia.org/wiki/JavaScript">JAVASCRIPT</a></p>
        </div>
      </div>
      <div className='container-s-1'>
        <div className="skill">
          <img src={Reactjs} alt="JavaScript" />
          <p><a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">REACT JS</a></p>
        </div>
        <div className="skill">
          <img src={Python} alt="HTML" />
          <p><a href="https://en.wikipedia.org/wiki/Python_(programming_language)">PYTHON</a></p>
        </div>
        <div className="skill">
          <img src={Nodejss} alt="HTML" />
          <p><a href="https://en.wikipedia.org/wiki/Node.js">NODE JS</a></p>
        </div>
      </div>
      <div className='container-s-1'>
        <div className="skill">
          <img src={Github} alt="HTML" />
          <p><a href="https://en.wikipedia.org/wiki/GitHub">GIT & GITHUB</a></p>
        </div>
        <div className="skill">
          <img src={ms} alt="HTML" />
          <p><a href="https://en.wikipedia.org/wiki/Microsoft_Office">MS OFFICE</a></p>
        </div>
        <div className="skill">
          <img src={Sql} alt="HTML" />
          <p><a href="https://en.wikipedia.org/wiki/SQL">SQL</a></p>
        </div>
      </div>
    </div>
  )
}

export default Profiles