import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router';
import UISideBar from '../../../UI/SideBar';
import UIPageHeader from '../../../UI/PageHeader';
import MainContainer from '../../../Containers/MainContainer';
import Form from '../../../Containers/Form';

//config tiene el menú y la configuración del usuario
import config from '../../../../config/config'

var titulo = 'Portfolio';

var info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear portfolios'
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
    NAME: 'Alta de noticia'
  }
]

var form =
  {
    TITULO:'Alta de portfolio',
    ELEMENTS:[
      {
        ID:'activo',
        NAME:'Activo',
        TYPE:'switch',
        CLASS:'',
        VALUE:0
      },
      {
        ID:'titulo',
        NAME:'Título',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'categorias',
        NAME:'Categorías',
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
      {
        ID:'tags',
        NAME:'Tags',
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
      {
        ID:'intro',
        NAME:'Intro',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: ''
      },
      {
        ID:'texto',
        NAME:'Texto',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: ''
      },
      {
        ID: 'subida',
        NAME: 'Subir imagen',
        TYPE: 'file',
        CLASS: 'btn btn-info fileinput-button'
      }



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




class AltaNoticia extends React.Component {

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
        {this.props.children}
      </div>
    );
  }
}
export default AltaNoticia
