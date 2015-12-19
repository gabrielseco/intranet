import React, { Component, PropTypes } from 'react'

class UIImagen extends React.Component {

  render(){
    if(this.props.data.FROM === 'SERVER'){
      this.props.data.URL = 'http://localhost:1337/images/'+this.props.data.VALUE;
    }
    return (
      <img className={this.props.data.CLASS}
           src={this.props.data.URL}
           width={this.props.data.WIDTH}
           title={this.props.data.TITLE}
           alt={this.props.data.TITLE}/>
    )

  }

}

UIImagen.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UIImagen
