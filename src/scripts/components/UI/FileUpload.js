import React, { Component, PropTypes } from 'react'

class UIFileUpload extends React.Component {

  render(){
    return (
      <span className={this.props.data.CLASS}>
        <span>Subir imagen</span>
        <input type='file' name='files[]' className='fileupload'/>
      </span>
    )

  }

}

UIFileUpload.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UIFileUpload
