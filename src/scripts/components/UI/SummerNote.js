import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class UISummerNote extends React.Component {
  componentDidMount(){
    this.node = ReactDOM.findDOMNode(this.refs.note);

    $(this.node).summernote({
        lang: 'es-ES',
    })

    $('.dropdown-toggle').dropdown()

    $(this.node).code(this.props.data.VALUE);

  }
  render(){

    return (
        <div id={this.props.data.ID} ref='note' className={this.props.data.CLASS}></div>

    )

  }

}

UISummerNote.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UISummerNote
