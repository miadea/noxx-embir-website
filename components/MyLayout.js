import Header from './Header'
const Layout = props => (
  <div className='layout' style={styles.main}>
    <Header />
    <div className="main">
      {props.children}
    </div>
    <style jsx global>{`
      body {
        background: black;
        color: white;
        margin: 0px;
        padding 0px;
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
      @media only screen and (min-width: 501px) {
        .ReactGridGallery_tile-viewport:hover {
          background: black;
        }
        .ReactGridGallery_tile-viewport:hover img {
          opacity: 0.7;
        }
        .layout {
          padding: 0 16px;
        }
        .main {
          padding-top: 0px;
        }
        .header-desktop {
          margin: 0 -16px;
          display: block;
        }
        .header-mobile {
          display: none !important;
        }
      }
    `}</style>
  </div>
)

export default Layout

const styles = {
  main: {
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    height: '100vh',
  }
}
