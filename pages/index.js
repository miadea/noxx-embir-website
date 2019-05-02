import React from 'react'
import Layout from '../components/MyLayout.js'
import Gallery from '../components/Gallery.js'
import IMAGES from '../images/products.json'

export default class Products extends React.Component {
  render() {
    return (
      <Layout title="Noxx Embir Photography">
        <Gallery images={IMAGES} />
      </Layout>
    )
  }
}
