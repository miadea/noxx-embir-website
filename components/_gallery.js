import React from 'react'
import Layout from '../components/MyLayout.js'
import Img from 'react-image'
import { BallBeat } from 'react-pure-loaders';
import Gallery from "react-grid-gallery";
import Lightbox from 'react-images';

export default class GalleryPage extends React.Component {
  state = {
    currentImage: 0,
    lightboxIsOpen: false,
    width: window.innerWidth
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  render() {
    const isMobile = this.state.width <= 600;
    if (isMobile) return (
      <div>
        {this.props.images.map((image, i) => {
          let {thumbnailHeight, thumbnailWidth} = image.thumbnail
          , aspect = thumbnailWidth / thumbnailHeight
          , height = this.state.width / aspect
          return<Img src={image.thumbnail.thumbnail} key={image.thumbnail.thumbnail}
            style={{ width: "100%",  marginBottom: 5 }}
            loader={
              <div style={{
                background: 'gray',
                width: "100%",
                height,
                marginBottom: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <BallBeat loading color="#FFFFFF" />
              </div>
            }
            />
        })}
      </div>
    )
    return (
      <div style={{
          padding: "10px 30px 30px 30px"
        }}>

        <div style={{
          display: "block", minHeight: 1,
          width: "100%", overflow: "auto",
        }}>
          <Gallery onClick={this.openLightbox}
            enableImageSelection={false}
            enableLightbox={false}
            rowHeight={450}
            onClickThumbnail={this.openLightbox}
            images={this.props.images.map(({thumbnail}) => ({...thumbnail, src: ''}))}
            margin={3}
          />
        </div>
        <Lightbox images={this.props.images.map(({lightbox}) => lightbox )}
          backdropClosesModal
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }
  openLightbox = (currentImage, event) => {
    this.setState({ currentImage, lightboxIsOpen: true });
  }
  closeLightbox = () => {
    this.setState({ currentImage: 0, lightboxIsOpen: false });
  }
  gotoPrevious = () => {
    this.setState({ currentImage: this.state.currentImage - 1 });
  }
  gotoNext = () => {
    this.setState({ currentImage: this.state.currentImage + 1 });
  }
}
