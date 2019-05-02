import React from 'react'
import Layout from '../components/MyLayout.js'
import Gallery from '../components/Gallery.js'
import IMAGES from '../images/retouching.json'

export default class Retouching extends React.Component {
  render() {
    return (
      <Layout title="Retouching">
        <Gallery images={IMAGES} />
      </Layout>
    )
  }
}
