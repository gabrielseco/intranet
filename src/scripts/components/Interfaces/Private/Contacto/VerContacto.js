import React, { Component, PropTypes } from 'react'
import UISideBar from '../../../UI/SideBar';
import UIPageHeader from '../../../UI/PageHeader';
import UICard from '../../../UI/Card'
import MainContainer from '../../../Containers/MainContainer';

//flux

import AppActions from '../../../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../../../config/config'
var titulo = 'Contactos'
var texto = 'Listado de contactos'
var ver = 'Ver contacto'

var info = {
    TITULO : titulo,
    ICON: 'md md-list',
    TEXTO: ver
}

var breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME: titulo
  },
  {
    NAME: texto
  },
  {
    NAME: ver
  }
]

class VerContacto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data:'', api: 'contactos'}

  }
  componentDidMount(){
    var id = this.props.params.id;
    AppActions.getOne(this.state.api, id, (res) => {
      console.log(res)
      this.setState({data: res})
    });

  }

  render() {
    if(this.state.data !== ''){
    return (
      <div>
        <UISideBar data={config}/>
        <div className='main-container'>
          <MainContainer data={breadcrumb}/>
          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className='forms-advanced'>
              <UIPageHeader info={info}/>
              <UICard data={this.state.data}/>
            </section>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  } else {
    return (<div></div>)
  }

 }
}
export default VerContacto
