import React from 'react'
import '../components/Home.css'
import me from '../Images/profile.jpg'

function Home() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="left">
          <div className="title">
            <h2>PORTFOLIO</h2>
            <h1>MANDEEP DAHIYA</h1>
            <p>FULL STACK DEVELOPOR | PROGRAMMER</p>
          </div>
        </div>
        <div className="right">
          <div className="circle">
            <img src={me} alt="Mandeep's Profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home