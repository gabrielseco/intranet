import React, { Component, PropTypes } from 'react'

//flux
import AppActions from '../../actions/app-actions';

var style = {
  margin: 'auto',
  maxWidth: '400px'
}

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = { api: 'user'}
  }
  handleSubmit(e){
    e.preventDefault();

    var obj = {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value
    }

    AppActions.add(this.state.api + "/login", obj, (res) => {
      console.log('login res',res)
      //this.props.history.pushState(null, "");
    })



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
              <form className="form-floating">
                <div className="form-group">
                  <label htmlFor="inputEmail" className="control-label">Email</label>
                  <input id='email' type="text" className="form-control"/> </div>
                <div className="form-group">
                  <label htmlFor="inputPassword" className="control-label">Password</label>
                  <input id='password' type="password" className="form-control"/>
                </div>
              </form>
            </div>
            <div className="card-action clearfix">
              <div className="pull-right">
                <button onClick={this.handleSubmit.bind(this)} type="button" className="btn btn-link black-text">Iniciar Sesión</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Login
