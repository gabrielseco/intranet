import React, { Component, PropTypes } from 'react'

class UIInput extends React.Component {
  _onChange(e){
    this.props.data.VALUE = e.target.value;
  }
  render(){
    return (
      <div>
        <input id={this.props.data.ID} type={this.props.data.TYPE}
                className={this.props.data.CLASS} required={this.props.data.REQUIRED}
                data-error={this.props.data.VALIDATION} defaultValue={this.props.data.VALUE} onChange={this._onChange.bind(this)}/>
        <div className="help-block with-errors"></div>
      </div>

    )

  }

}

UIInput.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UIInput
