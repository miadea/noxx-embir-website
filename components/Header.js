import React from 'react'
import Link from 'next/link'
import MobileHeader from './mobile/header'
import { withRouter } from 'next/router'

const LINKS = [
  {name: "Product", url: '/'},
  {name: "Retouching", url: '/retouching'},
  {name: "Architecture", url: '/architecture'},
  {name: "Contact", url: '/contact'},
]

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <MobileHeader links={LINKS} />
        <DesktopHeader links={LINKS} />
      </div>
    )
  }
}

class DesktopHeader extends React.Component {
  styles = {
    nav: {
      fontSize: "1.5rem",
      height: 100,
      width: '100%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    titleLogoContainer: {
      flex: 1,
      paddingLeft: 100,
    },
    titleLogo: {
      height: 60,
    },
    fakeLink: {
      flex: 1,
    }
  }
  render() {
    let {styles} = this;
    return(
      <div className='header-desktop'>
        <div style={styles.nav}>
          <div style={styles.titleLogoContainer}>
            <img style={styles.titleLogo} src="/static/TitleLogoWhite.png" />
          </div>
          {LINKS.map(({name, url}) => {
            return <DesktopHeaderLink key={url} name={name} url={url} selected={url == this.props.router.pathname} />
          })}
          <div style={styles.fakeLink}/>
        </div>
      </div>
    )
  }
}
DesktopHeader = withRouter(DesktopHeader)

class DesktopHeaderLink extends React.Component {
  styles = {
    linkStyle: {
      marginRight: 15,
      padding: "50px",
      textDecoration: "none",
      color: "white",

    },
    hoverStyle: {
      marginRight: 15,
      padding: "50px",
      textDecoration: "none",
      color: "gray",
    },
    selectedStyle: {
      marginRight: 15,
      padding: "50px",
      textDecoration: "none",
      color:"#ed1c24"
    }
  }
  state = { hover:false }
  handleHover = () => {
    this.setState({hover:!this.state.hover});
  }
  render() {
    let {linkStyle, hoverStyle, selectedStyle} = this.styles
    , {name, url, selected} = this.props
    , {hover} = this.state
    , style = linkStyle;
    if (hover) style = hoverStyle
    if (selected) style = selectedStyle
    return <Link href={url}>
      <a onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
      style={style}>{name}</a>
    </Link>
  }
}
