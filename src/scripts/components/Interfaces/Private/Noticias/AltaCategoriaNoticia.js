import React, { Component, PropTypes } from 'react'
import UISideBar from '../../../UI/SideBar';
import UIPageHeader from '../../../UI/PageHeader';
import MainContainer from '../../../Containers/MainContainer';
import Form from '../../../Containers/Form';

//flux
import AppActions from '../../../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../../../config/config'

var titulo = 'Categorías';

var info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear categorías'
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
    NAME: 'Alta de categoría de una noticia'
  }
]

var form =
  {
    TITULO:'Alta de categoría',
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
        TAKECONTROL:'slug',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'slug',
        NAME:'URL',
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
        TYPE:'button',
      }
    ]
  }




class AltaCategoriaNoticia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {api: 'categorias_noticias'}

  }
  makeAction(obj){
    AppActions.add(this.state.api, obj, (res) => {
      console.log('crear categoria_noticia',res)
      this.props.history.pushState(null, "/listar_noticias_categorias");
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
export default AltaCategoriaNoticia
