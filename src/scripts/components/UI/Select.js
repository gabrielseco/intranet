import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'


class UISelect extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.node = ReactDOM.findDOMNode(this.refs.select);

    $(this.node).select2()

  }
  render(){
    var options = this.props.data.VALUE.map((res, i) => {
      return <option key={i} value={res.ID}>{res.NAME}</option>
    })


    return (
      <div>
        <select ref='select' className="select2-tags form-control"
                required={this.props.data.REQUIRED}
                data-error={this.props.data.VALIDATION}
                multiple={this.props.multiple}>
          {options}
        </select>
      </div>

    )

  }

}

UISelect.propTypes = {
  data: PropTypes.object.isRequired,
  multiple: PropTypes.bool
}


export default UISelect
