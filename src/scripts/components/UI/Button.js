import React, { Component, PropTypes } from 'react'


class UIButton extends React.Component {
  click(){
    if(this.props.data.refComponent === 'ver' || this.props.data.refComponent === 'editar'){
      console.log('ver',this.props.data)
      location.href='#/'+this.props.data.LINK+"/"+this.props.data.ID;
    } else if(this.props.data.refComponent === 'eliminar'){
        console.log('ID ELIMINAR'+this.props.data.ID)
        this.props.data.ACTIONS.setPropertyForStore(this.props.data.STORE, this.props.data.ID)
        this.props.data.ACTION()
    }
  }
  goBack(){
    this.props.history.goBack()
  }
  render(){

    var span = {}
    switch(this.props.data.TYPE){
      case 'ROUND':
        span = <span className={this.props.data.ICON}></span>
        break;
      default:
        span = <span>{this.props.data.NAME}</span>
    }
    if(this.props.data.refComponent === 'eliminar'){
      return (
        <button ref='modal' type="button" className={this.props.data.CLASS}
                 bs-modal="modal"
                 data-toggle="dropdown"
                 onClick={this.click.bind(this)}> {this.props.data.NAME}
        </button>
      )
    }

    if(this.props.data.refComponent === 'ver' || this.props.data.refComponent === 'editar'){
      return (
        <button ref={this.props.data.refComponent} type={this.props.data.TYPE}
                className={this.props.data.CLASS}
                onClick={this.click.bind(this)}>
                {span }
        </button>
      )
    }
    if(this.props.data.NAME === 'Cancelar') {
      return (
        <button ref={this.props.data.refComponent} type={this.props.data.TYPE}
                className={this.props.data.CLASS}
                onClick={this.goBack.bind(this)}>
                {span }
        </button>
      )
    }
    return (
      <button type={this.props.data.TYPE}
              className={this.props.data.CLASS}
              onClick={this.props.event}>
              {span }
      </button>
    )



  }

}


UIButton.propTypes = {
  data: PropTypes.object.isRequired,
  event: PropTypes.func
}


export default UIButton
