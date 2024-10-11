import React from "react";
import "../components/Home.css";
import abt from '../Images/about.jpg';
import Doc from '../Documents/Mandeep CV - Updated.pdf'

function About() {
  const handleDownload = () => {
    window.open(process.env.PUBLIC_URL + {Doc}, '_blank');
  };

  return (
    <div className="portfolio">
      <div className="header">
        <div className="page-number">
          <span className="plus-sign">+</span>
          <span>PAGE 01</span>
        </div>
      </div>
      <div className="content">
        <div className="image-container">
          <img
            src={abt}
            alt="About ME"
          />
        </div>
        <div className="text-container">
          <h1>ABOUT ME</h1>
          <p>
            I am a passionate and dedicated computer science student with a
            strong foundation in software development, algorithms, and data
            structures. With hands-on experience in various programming
            languages including Python, JavaScript, and C++, I have developed a
            keen interest in web development and database management.
            <br /> <br />I am a quick learner with strong analytical skills and a knack
            for problem-solving. I thrive in collaborative environments and
            enjoy working on projects that challenge me to think creatively and
            push the boundaries of technology. I am eager to leverage my skills
            and knowledge to contribute to innovative projects and grow as a
            professional in the tech industry.
          </p>
          <div>
            <button onClick={handleDownload}>Open CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
