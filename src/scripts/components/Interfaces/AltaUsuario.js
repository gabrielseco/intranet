import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router';
import UISideBar from '../UI/SideBar';
import UIPageHeader from '../UI/PageHeader';
import MainContainer from '../Containers/MainContainer';
import Form from '../Containers/Form';

//flux
import AppActions from '../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../config/config'

var info = {
    TITULO : 'Usuarios',
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear usuarios nuevos'
}

var form =
  {
    TITULO:'Alta de usuario',
    ELEMENTS:[
      {
        ID:'activo',
        NAME:'Activo',
        TYPE:'switch',
        CLASS:'',
        VALUE:0,
      },
      {
        ID:'usuario',
        NAME:'Usuario',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'password',
        NAME:'Password',
        TYPE:'password',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
       'VALIDATION':'El campo es requerido'

      },
      {
        ID:'email',
        NAME:'Email',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },


    ],
    BUTTONS: [
      {
        NAME:'Guardar',
        CLASS:'btn btn-primary',
        TYPE:'submit'
      },
      {
        NAME:'Cancelar',
        CLASS:'btn btn-default',
        TYPE:'button'
      }
    ]
  }


var breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME: 'Usuarios'
  },
  {
    NAME: 'Alta de usuario'
  }
]



class AltaUsuario extends React.Component {

  constructor(props) {
    super(props);
  }

  makeAction(obj){
    AppActions.addUser(obj, (res) => {
      console.log('crear usuario',res)
      this.props.history.pushState(null, "/");
    })
  }

  render() {

    return (
      <div>
        <UISideBar data={config}/>
        <div className='main-container'>
          <MainContainer data={breadcrumb}/>
          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className='forms-advanced'>
              <UIPageHeader info={info}/>
              <Form {...this.props} form={form} makeAction={this.makeAction}/>
            </section>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default AltaUsuario
