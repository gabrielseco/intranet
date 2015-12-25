import React, { Component, PropTypes } from 'react'

var style = {
  margin: 'auto',
  maxWidth: '400px'
}

class Login extends React.Component {
  handleSubmit(e){
    e.preventDefault();

  }
  render(){
    return(
      <div className="page-login">
        <div className="center">
          <div className="card bordered z-depth-2" style={style}>
            <div className="card-header">
              <div className="brand-logo">
                <div id="logo">
                  <div className="foot1"></div>
                  <div className="foot2"></div>
                  <div className="foot3"></div>
                  <div className="foot4"></div>
                </div> GGSECO </div>
            </div>
            <div className="card-content">
              <div className="m-b-30">
                <p className="card-title-desc"> Bienvenid@ a tu intranet. Loguéate con tu correo y contraseña </p>
              </div>
              <form className="form-floating" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label htmlFor="inputEmail" className="control-label">Email</label>
                  <input type="text" className="form-control"/> </div>
                <div className="form-group">
                  <label htmlFor="inputPassword" className="control-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword"/> </div>
              </form>
            </div>
            <div className="card-action clearfix">
              <div className="pull-right">
                <button type="submit" className="btn btn-link black-text">Iniciar Sesión</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Login
