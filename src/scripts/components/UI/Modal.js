import React, { Component, PropTypes } from 'react'

class UIModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    var name = this.props.data.NAME.toLowerCase();
    console.log(this.props.data)
    return (
      <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Eliminar {this.props.data.NAME}</h4>
              </div>
              <div className="modal-body">
                <h4>¿Desea eliminar el {name}?</h4>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={this.props.remove} >Eliminar</button>
              </div>
            </div>
          </div>
        </div>

    )

  }

}

UIModal.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UIModal
