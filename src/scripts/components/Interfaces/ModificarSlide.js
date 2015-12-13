import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router';
import UISideBar from '../UI/SideBar';
import UIPageHeader from '../UI/PageHeader';
import MainContainer from '../Containers/MainContainer';
import Form from '../Containers/Form';

//config tiene el menú y la configuración del usuario
import config from '../../config/config'

var info = {
    TITULO : 'Slide',
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes modificar banners nuevos'
}

var form =
  {
    TITULO:'Modificar banner',
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
        VALUE: 'Slide 1'
      },
      {
        ID:'enlace',
        NAME:'Enlace',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: 'http://www.google.com'
      },
      {
        ID:'texto',
        NAME:'Texto',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: '<p>esto es un texto</p>'
      },
      {
        ID:'imagen',
        NAME:'Imagen',
        TYPE:'img',
        CLASS:'img-thumbnail',
        VALUE: 'http://sonarfm.cl/sonarfm/site/artic/20151018/imag/foto_0000000120151018151549.jpg'
      },
      {
        ID: 'subida',
        NAME: 'Reemplazar imagen',
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

var breadcrumb = [
  {
    NAME: 'GGSECO.COM'
  },
  {
    NAME: 'Slide'
  },
  {
    NAME: 'Modificar de banner'
  }
]


class ModificarSlide extends React.Component {

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
export default ModificarSlide
