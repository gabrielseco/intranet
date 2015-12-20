import React, { Component, PropTypes } from 'react'
import { slugify } from '../../lib'


class UIInput extends React.Component {
  _onChange(e){
    this.props.data.VALUE = e.target.value;
    if(this.props.data.TAKECONTROL !== '') {
      document.getElementById(this.props.data.TAKECONTROL).value = slugify(this.props.data.TAKECONTROL, e.target.value)
    }
  }
  render(){
    console.log(this.props.data.ID);
    return (
      <div>
        <input id={this.props.data.ID} type={this.props.data.TYPE}
                className={this.props.data.CLASS} required={this.props.data.REQUIRED}
                data-error={this.props.data.VALIDATION} defaultValue={this.props.data.VALUE}
                autoComplete="off"
                onChange={this._onChange.bind(this)}/>
        <div className="help-block with-errors"></div>
      </div>

    )

  }

}

UIInput.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UIInput
