import React from 'react'
import Layout from '../components/MyLayout.js'

export default class About extends React.Component {
  render() {
    return (
      <Layout title="Contact">
        <div className="contact-container">
          <div className="contact-subcontainer">
            <div className="contact">
              <form action="https://formspree.io/noxxembir@gmail.com" method="POST">

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="_replyto"/>

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>

                <input type="submit" value="Send" />

              </form>
            </div>

            <div className="about">
              <p>
              Noxx Embir specializes in commercial product photography and digital
              image retouching. Noxx discovered their passion for detail oriented
              photography working as an assistant wedding photographer and has since
              obtained a bachelor's degree in Commercial Photography. They combine
              their technical knowledge with their background in
              art to compose, shoot, and render high quality images.
              </p>
              <br/>
              <p>
              Noxx is currently available to discuss potential projects.
              Fill out the contact form for more information.
              </p>
            </div>

          </div>

          <div className="contact-footer">
            <span>© Noxx Embir 2019</span>
          </div>
        </div>
      </Layout>
    )
  }
}
