import React from 'react';
import '../components/Home.css';
import codeSoft from '../Images/codsoft.png';
import codingBlocks from '../Images/Node.js.png';
import oracleAcademy from '../Images/Java.png';
import oracleAcademyDBMS from '../Images/DBMS with SQL.png';
import cetpaInfotech from '../Images/Web Design.png';
import skillzCafe from '../Images/skillzcafe.png';
// import tcsion from '../images/tcsion.png';
import cognitiveClass from '../Images/SQL.png';

function Certification() {
  return (
    <div className='portfolio'>
      <div className="header">
        <div className="page-number">
          <span className="plus-sign">+</span>
          <span>PAGE 05</span>
        </div>
      </div>
      <div className='container3'>
        <div className="card1">
          <img src={codeSoft} className="card1-img-top" alt="CodeSoft" />
          <div className="card1-body">
            <h5>CodeSoft (Web Development Intern)</h5>
          </div>
        </div>
        <div className="card1">
          <img src={codingBlocks} className="card1-img-top" alt="Coding Blocks" />
          <div className="card1-body">
            <h5>Coding Blocks (Node.js)</h5>
          </div>
        </div>
        <div className="card1">
          <img src={oracleAcademy} className="card1-img-top" alt="Oracle Academy" />
          <div className="card1-body">
            <h5>Oracle Academy (Java)</h5>
          </div>
        </div>
      </div>
      <div className='container4'>
        <div className="card1">
          <img src={oracleAcademyDBMS} className="card1-img-top" alt="Oracle Academy DBMS" />
          <div className="card1-body">
            <h5>Oracle Academy (DBMS with SQL)</h5>
          </div>
        </div>
        <div className="card1">
          <img src={cetpaInfotech} className="card1-img-top" alt="Cetpa Infotech" />
          <div className="card1-body">
            <h5>Cetpa Infotech (Web Designing)</h5>
          </div>
        </div>
        <div className="card1">
          <img src={skillzCafe} className="card1-img-top" alt="Skillz Cafe" />
          <div className="card1-body">
            <h5>Skillz Cafe (Python)</h5>
          </div>
        </div>
      </div>
      <div className='container5'>
        <div className="card1">
          <img src="..." className="card1-img-top" alt="TCSion" />
          <div className="card1-body">
            <h5>TCSion (Web Development Trainee)</h5>
          </div>
        </div>
        <div className="card1">
          <img src={cognitiveClass} className="card1-img-top" alt="Cognitive Class" />
          <div className="card1-body">
            <h5>Cognitive Class  (SQL & Relational Databases)</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certification;