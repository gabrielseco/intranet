import React, { Component, PropTypes } from 'react'
import UIButton from '../UI/Button'

class ButtonGroup extends React.Component {

  render(){
    var buttons = this.props.data.map((button, i ) => {
      return <UIButton key={i} data={button}/>
    })
    return (
      <div>
        {buttons}
      </div>
    )
  }
}

ButtonGroup.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default ButtonGroup
