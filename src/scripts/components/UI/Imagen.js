import React, { Component, PropTypes } from 'react'

class UIImagen extends React.Component {

  render(){
    return (
      <img className={this.props.data.CLASS} src={this.props.data.VALUE} title='no' alt='no'/>
    )

  }

}

UIImagen.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UIImagen
