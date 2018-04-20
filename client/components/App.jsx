import React from 'react'

import {getImage} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      picture: {
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00000/opgs/edr/fcam/FRA_397506083EDR_F0010008AUT_04096M_.JPG'
      },
      solDate: 1000,
      camera: 'fhaz'
    }
    this.increaseDay = this.increaseDay.bind(this)
  }

  componentDidMount () {
    this.refreshImage()
  }

  refreshImage () {
    getImage(this.state.solDate)
      .then(picture => {
        this.setState({
          picture: picture
        })
      })
  }

  increaseDay() {
    this.setState({
      solDate: this.state.solDate+1
    })
    this.refreshImage()
  }

  renderContent() {
    return(
      this.state.picture ? <img id='pic' src={this.state.picture.img_src} /> : <p>[DAY MISSING]</p>
    )
  }

  render () {
    return (
      <div className='app'>
        <div id='date'>{this.state.solDate}</div>
        <div id='link' onClick={this.increaseDay}>{this.renderContent()}</div>
      </div>
    )
  }
}

export default App
