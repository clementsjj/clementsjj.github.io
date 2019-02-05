import React, { Component } from 'react'
//import manhattan from "../../images/manhattan-looking-towards-les.jpg"
import manhattanbw from '../../images/nycbw.jpg'
import {
  github,
  instagram,
  linkedin,
  twitter,
  slack,
  venmo,
} from '../../images/icons/social_media'
import './hero.css'

export default class Hero extends Component {
  render() {
    const style = {
      backgroundImage: `url(${manhattanbw})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '40vh',
      //border: "5px solid #00008b",
      padding: 0,
      margin: 0,
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    const iconStyle = {
      height: 50,
      width: 'auto',
      margin: 10,
    }

    const container = {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 139, .3)',
      //backgroundColor: 'rgba(63, 81, 181, .3)',
      borderRadius: 10,
    }
    return (
      <div style={style}>
        <div style={container}>
          <a href="https://github.com/clementsjj" target="_blank">
            <img
              style={iconStyle}
              className={'icon'}
              src={github}
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/clementsjj/" target="_blank">
            <img
              style={iconStyle}
              className={'icon'}
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a href="https://twitter.com/clementsjj" target="_blank">
            <img
              style={iconStyle}
              className={'icon'}
              src={twitter}
              alt="twitter"
            />
          </a>
          <a href="https://www.instagram.com/jj4bucky/" target="_blank">
            <img
              style={iconStyle}
              className={'icon'}
              src={instagram}
              alt="instagram"
            />
          </a>

          {/* <img style={iconStyle} className={'icon'} src={slack} alt="slack" />
          <img style={iconStyle} className={'icon'} src={venmo} alt="venmo" /> */}
        </div>
      </div>
    )
  }
}
