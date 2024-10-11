import React from 'react'
import '../components/Home.css'
import edu from '../Images/edu.jpg'
function Educations() {
  return (
    <div className="portfolio">
      <div className='container'>
        <div className="left-education">
          <h1>EDUCATION</h1>
          <div className="education-content">
            <div className="education-entry">
              <div className="education-dates">
                2020-2024
              </div><br />
              <div className="education-institution">
                <a href="https://piet.co.in/">Panipat Institute of Engineering and Technology , Samalkha</a>
              </div>
              <div className="education-degree">
                Bachelor of Technology
              </div>
              <div className="education-honors">
                Honors: Computer Science and Engineering  (SGPA: 8.692/10.0)
              </div>
            </div>
            <div className="education-entry">
              <div className="education-dates">
                2019-2020
              </div><br />
              <div className="education-institution">
                Shivaji Vidyapeeth Sr. Sec. School , Sonipat (Haryana)
              </div>
              <div className="education-degree">
                Senior Secondary - 12th
              </div>
              <div className="education-honors">
                Honors: CBSE (85.6 %)
              </div>
            </div>
            <div className="education-entry">
              <div className="education-dates">
                2017-2018
              </div><br />
              <div className="education-institution">
                Mother Khazani Convent Sr. Sec. School , Mungeshpur (Delhi)
              </div>
              <div className="education-degree">
                Secondary - 10th
              </div>
              <div className="education-honors">
                Honors: CBSE (83%)
              </div>
            </div>
          </div>
        </div>
        <div className="right-education">
            <div className="page-number2">
              <span className="plus-sign">+</span>
              <span>PAGE 02</span>
            </div>  
            <img src={edu} alt="Art Studio" />
        </div>
      </div>
    </div>
  )
}

export default Educations