import React, { Component, PropTypes } from 'react'

let Add = InnerComponent => class extends React.Component {
  constructor(){
    super()
    this.event = this.event.bind(this);
  }
  event(){
    console.log('event')
    location.href='#/'+this.props.data.LINK;
  }

  render(){
    console.log('higher')
    return <InnerComponent event={this.event} {...this.state} {...this.props}/>
  }
}

export default Add
