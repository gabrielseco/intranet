import React, { Component, PropTypes } from 'react'

require('../../../styles/public/screen.scss');

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='home blog'>
        {this.props.children}
        <h1>hola sin verguenza</h1>
      </div>
  )
 }
}

export default Home
