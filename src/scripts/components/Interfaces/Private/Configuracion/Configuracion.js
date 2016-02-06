import React, { Component, PropTypes } from 'react'
import UISideBar from '../../../UI/SideBar';
import UIPageHeader from '../../../UI/PageHeader';
import MainContainer from '../../../Containers/MainContainer';
import Form from '../../../Containers/Form';

import config from '../../../../config/config'

var titulo = 'Configuración'

var info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: ''
}

var breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME: titulo
  }
]

var form =
  {
    TITULO:'Creación dinámica de JSON',
    ELEMENTS:[
      {
        ID:'titulo',
        NAME:'Tabla',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'iconos',
        NAME:'Iconos',
        TYPE:'select-multiple',
        CLASS:'',
        VALUE: [
          {
            ID:'1',
            NAME:'Javascript'
          },
          {
            ID:'2',
            NAME:'.NET'
          },
          {
            ID:'3',
            NAME:'PHP'
          },
        ]  ,
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


class Configuracion extends React.Component {
  constructor(props) {
    super(props);
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
              <Form form={form}/>
            </section>
          </div>
        </div>
      </div>
    );
  }

}

export default Configuracion
