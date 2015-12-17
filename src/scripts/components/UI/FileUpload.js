import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import AppActions from '../../actions/app-actions'


class UIFileUpload extends React.Component {
  onChange(e){
     var file = e.target.files[0];
     var formData = new FormData();
     formData.append("file", e.target.files[0]);
     console.log(JSON.stringify(formData))
     AppActions.setPropertyForStore('imagen', formData);

  }
  render(){
    return (
      <span className={this.props.data.CLASS}>
        <span>Subir imagen</span>
        <input id={this.props.data.ID} ref='file' type='file' name='files[]' onChange={this.onChange} className='fileupload'/>
      </span>
    )

  }

}

UIFileUpload.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UIFileUpload
