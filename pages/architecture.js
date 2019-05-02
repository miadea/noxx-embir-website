import React from 'react'
import Layout from '../components/MyLayout.js'
import Gallery from '../components/Gallery.js'
import IMAGES from '../images/architecture.json'

export default class Architectures extends React.Component {
  render() {
    return (
      <Layout title="Architecture">
        <Gallery images={IMAGES} />
      </Layout>
    )
  }
}
