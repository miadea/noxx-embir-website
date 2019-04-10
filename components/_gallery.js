import React from 'react'
import Layout from '../components/MyLayout.js'
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
    const isMobile = this.state.width <= 500;
    if (isMobile) return (
      <div>
        {this.props.images.map((image, i) => {
          return <img src={image.thumbnail.thumbnail} key={image.thumbnail.thumbnail}
          style={{
            width: "100%", verticalAlign: "middle",
            border: 0, marginBottom: 5
          }}
          />
        })}
      </div>
    )
    return (
      <div>
        <div style={{
          display: "block", minHeight: 1,
          width: "100%", overflow: "auto"
        }}>
          <Gallery onClick={this.openLightbox}
            enableImageSelection={false}
            enableLightbox={false}
            rowHeight={450}
            onClickThumbnail={this.openLightbox}
            images={this.props.images.map(({thumbnail}) => ({...thumbnail, src: ''}))}
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
