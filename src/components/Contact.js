import React from 'react'
import '../components/Home.css'

function Contact() {
  return (
    <div className='portfolio'>
      <div className="header">
        <div className="page-number">
          <span className="plus-sign">+</span>
          <span>PAGE 06</span>
        </div>
      </div>
      <div className="content">
        <div className="image-container">
          <img
            src="https://th.bing.com/th/id/R.55d049570657a7edfc208740d0df813c?rik=Htug5U%2faUEMnWQ&riu=http%3a%2f%2fwww.asahealthtech.com%2fimages%2f2020%2f12%2f17%2fcontactus.jpg&ehk=J9x23%2bNFNUhoAL7P3JO6%2fxnXtzAdueArJ6q8LLVH3E0%3d&risl=&pid=ImgRaw&r=0"
            alt="Contact Me...!!!"
          />
        </div>
        <div className="text-container">
          <h1>CONTACT ME</h1>
          <div className='details'>
          <p>Phone : +91 9728096729 <br /><br />Email : <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">mdahiya9728@gmail.com</a> <br /><br />Address : <a href="https://maps.app.goo.gl/JPWvNNmzTa4ZCEL99">Sonipat Haryana (131103)</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact