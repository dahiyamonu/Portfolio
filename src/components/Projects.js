import React from 'react'
import '../components/Home.css'

function Projects() {
  return (
    <div className='portfolio'>
      <div className="header">
        <div className="page-number">
          <span className="plus-sign">+</span>
          <span>PAGE 03</span>
        </div>
      </div>
      <div className='container1'>
        <div className="card">
           <a href="https://github.com/dahiyamonu/User-Gateway">
            <img src="https://th.bing.com/th/id/OIP.hBgPhl24PyOXxfO4wJn_RAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" className="card-img-top" alt="..." />
            </a>
          <div className="card-body">
            <h5>User Gateway</h5>
            <p>The USER-Gateway is a React web component for user authentication, offering a responsive login and registration interface with real-time validation. It integrates securely with backend services for efficient user management.</p>
          </div>
          <div className="button">
              <a href="https://github.com/dahiyamonu/User-Gateway">OPEN</a>
            </div>
        </div>
        <div className="card">
          <a href="https://dahiyamonu.github.io/Todo-App/" >
            <img src="https://th.bing.com/th/id/OIP.W9fKISVyDo3FfBpxvVwgSAAAAA?pid=ImgDet&w=184&h=147&c=7&dpr=1.3" className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <h5>Todo App</h5>
            <p>A simple JavaScript Todo app lets users create, manage, and organize tasks efficiently. It offers an intuitive interface for adding, editing, deleting, and marking tasks as complete</p>
          </div>
          <div className="button">
              <a href="https://dahiyamonu.github.io/Todo-App/" >OPEN</a>
          </div>
        </div>
        <div className="card">
          <a href="https://github.com/dahiyamonu/Project---III">
            <img src="https://th.bing.com/th/id/OIP.sySbVjqs401z6kQUTXCAHwAAAA?pid=ImgDet&w=170&h=132&c=7&dpr=1.3" className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <h5>Android App (HI-FI)</h5>
            <p>An Android app (HI-FI) that connects people globally through social networking features while providing daily, personalized news updates. It combines real-time communication with customizable news feeds, keeping users informed and connected worldwide.</p>
          </div>
          <div className="button">
              <a href="https://github.com/dahiyamonu/Project---III">OPEN</a>
          </div>
        </div>
      </div>
      <div className='container2'>
        <div className="card">
          <a href="https://github.com/dahiyamonu/Virtual-Mouse">
            <img src="https://user-images.githubusercontent.com/78357575/123516002-93aed580-d6b7-11eb-835b-ac7b284850d5.jpg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <h5>Virtual Mouse</h5>
            <p>A virtual mouse in Python simulates mouse movements, clicks, and scrolls using libraries like `pyautogui` and `opencv`. It enables hands-free interaction by tracking hand gestures or facial movements through a webcam.</p>
          </div>
          <div className="button">
              <a href="https://github.com/dahiyamonu/Virtual-Mouse">OPEN</a>
          </div>
        </div>
        <div className="card">
          <a href="https://dahiyamonu.github.io/Food.mandy/">
            <img src="https://th.bing.com/th/id/OIP.9kGAzVBcETtnnD1LaeRhBQHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <h5>Foodie Web</h5>
            <p>Restro/Food Site for ordering quality food online. It is the frame work of HTML , CSS and JAVASCRIPT only .</p>
          </div>
          <div className="button">
              <a href="https://dahiyamonu.github.io/Food.mandy/">OPEN</a>
          </div>
        </div>
        <div className="card">
          <a href="https://dahiyamonu.github.io/Trend-Cart/">
            <img src="https://th.bing.com/th/id/OIP.T4_QCLXo76zvO2tetyjVaQHaE0?pid=ImgDet&w=184&h=119&c=7&dpr=1.3" className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <h5>Trend Cart</h5>
            <p>Trend Cart is an online shopping site. It is the frame work of HTML , CSS and JAVASCRIPT only .</p>
          </div>
          <div className="button">
              <a href="https://dahiyamonu.github.io/Trend-Cart/">OPEN</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects