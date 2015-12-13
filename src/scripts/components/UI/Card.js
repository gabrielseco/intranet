import React, { Component, PropTypes } from 'react'

class UICard extends React.Component {

  render(){
    return (
      <div className="card bordered">
        <div className="card-header"> <span className="card-title">Contacto #{this.props.data.id}</span> </div>
          <div className="card-content">
            <p>Ha contactado contigo la siguiente persona:</p>
            <p><b>Nombre</b>: {this.props.data.nombre}</p>
            <p><b>Correo</b>: {this.props.data.email}</p>
            <p><b>Telefono</b>: {this.props.data.telefono}</p>
            <p><b>Observaciones</b>: {this.props.data.observaciones}</p>
          </div>
          <div className="card-action clearfix">
          </div>
        </div>
    )

  }

}

UICard.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UICard
