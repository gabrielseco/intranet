import React, { Component, PropTypes } from 'react'
import { loadStyle, removeStyles} from '../../../lib/resources'

var style = {
  margin: 'auto',
  maxWidth: '400px'
}

class NotFound extends React.Component {
  goBack(){
    this.props.history.goBack()
  }
  componentDidMount(){
    removeStyles();
    loadStyle("src/assets/css/vendors.min.css")
    loadStyle("src/assets/css/styles.min.css")
    loadStyle("src/assets/css/intranet.css")

  }
  render(){
    return(
      <div className="page-error">
        <div className="center">
          <div className="card bordered z-depth-2" style={style}>
            <div className="card-content">
              <div className="m-b-30 text-center"> <i className="md md-cancel error-icon"></i>
                <h1 className="pink-text uppercase">404</h1>
                <p className="card-title-desc">Lo sentimos, pero la página que busca no existe</p>
              </div>
            </div>
            <div className="card-action clearfix">
              <div className="text-center">
                <button onClick={this.goBack.bind(this)} className="btn btn-primary btn-block">Volver</button> </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default NotFound
