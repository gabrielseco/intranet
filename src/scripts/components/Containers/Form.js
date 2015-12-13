import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import FormGroup from '../Forms/FormGroup';
import ButtonGroup from '../Forms/ButtonGroup';
import AppActions from '../../actions/app-actions';


class Form extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){

    var node = ReactDOM.findDOMNode(this.refs.myForm);
    $(node).validator();
  }

  handleSubmit(e){
    e.preventDefault();
    var obj = new Object();

    for(var i = 0; i < this.props.form.ELEMENTS.length; i++) {

      var key = this.props.form.ELEMENTS[i].ID;

      var value = document.getElementById(key).value;
      var type  = this.props.form.ELEMENTS[i].TYPE;

      if(value === 'on' && type === 'switch'){
        value = true
      } else if(value === 'off' && type === 'switch'){
        value = false
      }

      obj[key] = value;
    }

    this.props.makeAction.bind(this)(obj)


  }

  render() {
    console.log('props form',this.props)
    var elements = this.props.form.ELEMENTS.map((res, i) => {
      return <FormGroup key={i} data={res}/>
    });

    return (
      <div className='row m-b-40'>
        <div className='col-md-12'>
          <div className='well white'>
            <form ref='myForm' className='form-floating placeholder-form' onSubmit={this.handleSubmit.bind(this)}>
              <fieldset>
                <legend>{this.props.form.TITULO}</legend>
                {elements}
                <ButtonGroup data={this.props.form.BUTTONS}/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


Form.PropTypes = {
  form: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Form
