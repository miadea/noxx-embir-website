import Header from './Header'

const layoutStyle = {
  margin: 20
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx global>{`
      body {
        padding: 0 16px;
        background: black;
        color: white;
      }
      .ReactGridGallery_tile-viewport:hover {
        background: black;
      }
      .ReactGridGallery_tile-viewport:hover img {
        opacity: 0.7;
      }
    `}</style>
  </div>
)

export default Layout
