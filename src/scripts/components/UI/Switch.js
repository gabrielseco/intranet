import React, { Component, PropTypes } from 'react'

class UISwitch extends React.Component {
  constructor(props){
    super(props)
    this.state = {checked: this.props.data.VALUE}
  }

  onChange(field, e){
    var nextState = {}
    nextState[field] = e.target.checked
    console.log(nextState)
    this.setState(nextState)

  }
  render(){
    return (
      <div className="switch">
        <label className="filled"> No
          <input id={this.props.data.ID} type="checkbox" value={this.state.checked}  checked={this.state.checked} onChange={this.onChange.bind(this, 'checked')}/>
          <span className="lever"></span> Si
        </label>
      </div>

    )

  }

}

UISwitch.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UISwitch
