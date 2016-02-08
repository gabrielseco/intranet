import React, { Component, PropTypes } from 'react'


class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='home blog'>
        {this.props.children}
      </div>
  )
 }
}

export default Home
