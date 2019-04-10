import React from 'react'
import Link from 'next/link'
import MobileHeader from './mobile/header'

const LINKS = [
  {name: "Home", url: '/'},
  {name: "Product", url: '/product'},
  {name: "Retouching", url: '/retouching'},
  {name: "Architecture", url: '/architecture'},
  {name: "Contact", url: '/contact'},
]

export default class Header extends React.Component {
  styles = {
    linkStyle: {
      marginRight: 15
    }
  }
  render() {
    let {styles} = this;
    return(
      <div>
        <MobileHeader links={LINKS}/>
        <div className='header-desktop'>
          {LINKS.map(({name, url}) => {
            return <Link href={url} key={url}>
              <a style={styles.linkStyle}>{name}</a>
            </Link>
          })}
        </div>
      </div>
    )
  }
}
