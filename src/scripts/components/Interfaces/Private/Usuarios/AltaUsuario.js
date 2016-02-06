import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router';
import UISideBar from '../../../UI/SideBar';
import UIPageHeader from '../../../UI/PageHeader';
import MainContainer from '../../../Containers/MainContainer';
import Form from '../../../Containers/Form';

//flux
import AppActions from '../../../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../../../config/config'

var titulo = 'Usuarios';
var texto  = 'Alta de usuario'


var info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear usuarios nuevos'
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
  }
]
var form =
  {
    TITULO:texto,
    ELEMENTS:[
      {
        ID:'activo',
        NAME:'Activo',
        TYPE:'switch',
        CLASS:'',
        VALUE:0,
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
        ID:'nombre',
        NAME:'Nombre',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:''
      },
      {
        ID:'twitter',
        NAME:'Twitter',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:''
      },
      {
        ID:'github',
        NAME:'Github',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:''
      },
      {
        ID:'soundcloud',
        NAME:'Soundcloud',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:''
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






class AltaUsuario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {api: 'user'}
  }

  makeAction(obj){
    AppActions.add(this.state.api, obj, (res) => {
      console.log('crear usuario',res)
      this.props.history.pushState(null, "/listar_usuarios");
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
              <Form {...this.props} form={form} makeAction={this.makeAction.bind(this)}/>
            </section>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default AltaUsuario
