import React, { Component, PropTypes } from 'react'
import AppActions from '../../actions/app-actions';


class UIModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  event(){
    $("#exampleModal").modal('show')
  }
  render(){
    var name = this.props.data.COMPONENT.toLowerCase();
    if(this.props.loading ) {
      this.event();
    }
    return (
      <div className="modal"  id="exampleModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Eliminar {this.props.data.COMPONENT}</h4>
              </div>
              <div className="modal-body">
                <h4>¿Desea eliminar el {name} {this.props.data.NAME} ?</h4>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={this.props.remove.bind(this)} >Eliminar</button>
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
