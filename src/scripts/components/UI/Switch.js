import React, { Component, PropTypes } from 'react'

class UISwitch extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  onChange(event){
    console.log(event.target.value)
    if(event.target.value === 'on'){
      this.props.data.VALUE = true;
    } else {
      this.props.data.VALUE = false;
    }

  }
  render(){
    return (
      <div className="switch">
        <label className="filled"> No
          <input id={this.props.data.ID} type="checkbox" checked={this.props.data.VALUE} onChange={this.onChange}/>
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
