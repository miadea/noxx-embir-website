import { withRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'
import Header from './Header'

class Layout extends React.Component {
  state = {hackerCount: 0}
  componentDidMount() {
    document.body.addEventListener('contextmenu', this.contextMenu);
    document.body.addEventListener('keydown', this.keypress);
    document.body.addEventListener('dragstart', this.drag);
  }
  componentWillUnmount() {
    document.body.removeEventListener('contextmenu', this.contextMenu);
    document.body.removeEventListener('keydown', this.keypress);
    document.body.removeEventListener('dragstart', this.drag);
  }
  contextMenu = (e) => {
    if ('/contact' == this.props.router.pathname) return true;
    e.preventDefault();
    let {hackerCount} = this.state
    hackerCount = ++hackerCount
    if (hackerCount > 1) alert(`Copyright © 2019 Noxx Embir. You have done this ${hackerCount} times. Your IP Address may be logged.`);
    else alert("Copyright © 2019 Noxx Embir.");
    this.setState({hackerCount})
    return false;
  }
  keypress = (e) => {
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
  }
  drag = (e) => {
    let {hackerCount} = this.state
    hackerCount = ++hackerCount
    e.preventDefault();
    if (hackerCount > 1) alert("Copyright © 2019 Noxx Embir.");
    this.setState({hackerCount})
    return false;
  }
  render() {
    return(
      <div className='layout'>
        <Head>
          <meta name="description" content="Noxx Embir works with clients to provide high quality product photography and digital retouching. Contact Noxx to discuss any project ideas."/>
          <meta name="google-site-verification" content="fsilsDoagPiiPSunzPwNGRuLcOQ_leWm6GhsJ1oCb9o" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300" rel="stylesheet"/>
          <title>{ this.props.title || "Noxx Embir" }</title>
        </Head>
        <header>
          <Header />
        </header>
        <div className="main">
          {this.props.children}
        </div>
        <style jsx global>{`
          body {
            background: black;
            color: white;
            margin: 0px;
            padding 0px;
            font-family: 'Lato', sans-serif;
          }
          .layout {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
          }
          .main {
            flex: 1;
            display: block;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            height: 100vh;
            padding-top: 52px;
          }
          @keyframes appear {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes slideIn {
            0% {
              transform: translateX(-2%);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes shrink {
            0% {
              width: 95%;
            }
            100% {
              width: 90%;
            }
          }

          .header-desktop {
            display: none;
          }

          .example-appear {
            opacity: 0.01;
          }

          .example-appear.example-appear-active {
            opacity: 1;
            transition: opacity 1s ease;
            transition-delay: 0.5s;
          }

          .contact-container {
            background-color: #1a1a1a;
            min-height: calc(100vh - 52px);
            display: flex;
            flex-direction: column;
          }

          .contact-subcontainer {
            display: flex;
            flex: 1;
          }

          .contact {
            border-radius: 5px;
            padding: 10px;
            margin-right: 20px;
            margin-left: 20px;
            margin-bottom: 30px;
            flex: 1;
          }

          .contact input[type=text], .contact input[type=email], .contact select, .contact textarea {
            width: 100%; /* Full width */
            padding: 12px; /* Some padding */
            border: 1px solid #ccc; /* Gray border */
            border-radius: 4px; /* Rounded borders */
            box-sizing: border-box; /* Make sure that padding and width stays in place */
            margin-top: 6px; /* Add a top margin */
            margin-bottom: 16px; /* Bottom margin */
            resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
            font-size: 1rem;
          }

          #message {
            height: 100px;
          }

          .contact input[type=submit] {
            background-color: #ed1c24;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            align-self: flex-center;
            width: 100%;
             -webkit-appearance: none;
          }

          .contact input[type=submit]:hover {
            background-color: #a50d12;
          }

          .about {
            font-size: 1rem;
            font-family: 'Roboto Slab', serif;
            flex: 1;
            padding: 20px;
            line-height: 200%;
            text-align: center;
          }

          .contact-footer {
            background-color: black;
            padding: 20px 0 20px 50px;
            color: gray;
            display: flex;
            align-items: center;
          }


          @media only screen and (max-width: 701px) {
            .contact-subcontainer {
              flex-direction: column-reverse;
            }
          }

          @media only screen and (min-width: 1101px) {
            .ReactGridGallery_tile-viewport:hover {
              background: black;
            }
            .ReactGridGallery_tile-viewport:hover img {
              opacity: 0.7;
            }
            .layout {

            }
            .main {
              padding-top: 0px;
            }
            .header-desktop {

              width: 100vw;
              display: block;
            }
            .header-mobile {
              display: none !important;
            }

            .contact-container {
              min-height: calc(100vh - 100px);
            }

            .contact {
              padding: 70px;
            }

            .contact input[type=submit] {
              background-color: #ed1c24;
              color: white;
              padding: 12px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 1rem;
              align-self: flex-center;
              width: 20%;
              min-width: 100px;
            }

            .contact input[type=submit]:hover {
              background-color: #a50d12;
            }

            .about {
              font-size: 1.3rem;
              letter-spacing: 2px;
              line-height: 200%;
              padding: 70px;
              margin-right: 60px;
              text-align: left;
            }


          }
        `}</style>
      </div>
    )
  }
}

export default withRouter(Layout)
