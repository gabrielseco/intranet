import React, { Component, PropTypes } from 'react'


class UIDatePicker extends React.Component {

  render(){
    console.log('ID',this.props.data.ID)

    console.log('VALUE',this.props.data.VALUE)
    return (
      <input id={this.props.data.ID} type='date' className='form-control' defaultValue={this.props.data.VALUE}/>

    )

  }

}

UIDatePicker.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UIDatePicker
