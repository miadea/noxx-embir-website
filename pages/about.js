import React from 'react'
import Layout from '../components/MyLayout.js'
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';

const IMAGES = [
  {
    src:"https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/180909_EMS_20038.jpg",
    thumbnail:"https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/180909_EMS_20038.jpg",
    width: 2,
    height: 1
  },
  {
    src: "https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/180924_EMS0068-2.jpg",
    thumbnail: "https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/180924_EMS0068-2.jpg",
    width: 1,
    height: 2
  },
  {
    src: "lemonbrella_web_big_793_1181.jpg",
    thumbnail: "lemonbrella_web_big_793_1181.jpg",
    width: 793,
    height: 1181
  },
  {
    src: "https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/181105_EMS0056%20copy.jpg",
    thumbnail: "https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/181105_EMS0056%20copy.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/181201_EMS02177_3.jpg",
    thumbnail: "https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/181201_EMS02177_3.jpg",
    width: 1,
    height: 2
  },
  {
    src: "https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/181206_EMS0056.jpg",
    thumbnail: "https://noxxembirphotostorage.sfo2.digitaloceanspaces.com/Product/181206_EMS0056.jpg",
    width: 1,
    height: 2
  }
]

export default class About extends React.Component {
  state = { currentImage: 0 }
  render() {
    return (
      <Layout>
        <Gallery onClick={this.openLightbox}
          photos={IMAGES.map(image => ({...image, src: image.thumbnail}) )} />
        <Lightbox images={IMAGES}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </Layout>
    )
  }
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
}
