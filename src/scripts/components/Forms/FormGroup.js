import React, { Component, PropTypes } from 'react'
import UIInput from '../UI/Input';
import UISwitch from '../UI/Switch';
import UISummerNote from '../UI/SummerNote';
import UIFileUpload from '../UI/FileUpload'
import UIImagen from '../UI/Imagen'
import UISelect from '../UI/Select'
import UIDatePicker from '../UI/DatePicker'


class FormGroup extends React.Component {
  render(){
    var input = {};
    var label = <label className='control-label' htmlFor={this.props.data.ID}>{this.props.data.NAME}</label>
    switch(this.props.data.TYPE){
      case 'switch':
        input = <UISwitch data={this.props.data}/>
        break;
      case 'file':
        label = <span></span>
        input = <UIFileUpload data={this.props.data} />
        break;
      case 'img':
        input = <UIImagen data={this.props.data}/>
        break;
      case 'note':
        input = <UISummerNote data={this.props.data}/>
        break;
      case 'select-multiple':
        input = <UISelect data={this.props.data} multiple />
        break;
      case 'select':
        input = <UISelect data={this.props.data}/>
        break;
      case 'datepicker':
        input = <UIDatePicker data={this.props.data}/>
        break;
      default:
        input =  <UIInput data={this.props.data}/>
    }
    return (
      <div className='form-group filled'>
        {label}
        {input}
      </div>
    )
  }
}

FormGroup.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default FormGroup
