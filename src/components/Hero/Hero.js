import React, { Component } from 'react'
//import manhattan from "../../images/manhattan-looking-towards-les.jpg"
import manhattanbw from '../../images/nycbw.jpg'
import {fb, gh, gmail, insta, li, slack, snap, twit, wa} from '../../images/icons'
import './hero.css'

export default class Hero extends Component {
  render() {
    const style = {
      backgroundImage: `url(${manhattanbw})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: "100vw", 
      height: '20vh',
      //border: "5px solid #00008b",
      padding: 0,
      margin: 0, 
      color: 'white', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const iconStyle = {
      height:50,
      width: 'auto',
      margin: 10
    }

    const container = {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 139, .3)',
      //backgroundColor: 'rgba(63, 81, 181, .3)',
      borderRadius: 10
    }
    return (
      <div style={style} >
        <div style={container}>
        <img style={iconStyle} className={'icon'} src={gh}/>
        <img style={iconStyle} className={'icon'} src={insta}/>
        <img style={iconStyle} className={'icon'} src={li}/>
        <img style={iconStyle} className={'icon'} src={snap}/>
        <img style={iconStyle} className={'icon'} src={slack}/>
        <img style={iconStyle} className={'icon'} src={twit}/>
        </div>
      </div>
    )
  }
}




