import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router';
import UISideBar from '../../../UI/SideBar';
import UIPageHeader from '../../../UI/PageHeader';
import MainContainer from '../../../Containers/MainContainer';
import Form from '../../../Containers/Form';

//using functions to map values
import { mapValues } from '../../../../lib'

//flux
import AppActions from '../../../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../../../config/config'

var titulo = 'Tags'


var info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes modificar tags'
}

var breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME: 'Noticias'
  },
  {
    NAME: titulo
  },
  {
    NAME: 'Edición de tag'
  }
]


var form =
  {
    TITULO:'Edición de tag',
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
        TYPE:'button'
      }
    ]
  }


class EditarTagNoticia extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: '', api: 'tags_noticias' }
  }

  componentDidMount(){
    var id = this.props.params.id;
    AppActions.getOne(this.state.api, id, (res) => {
      console.log(res)
      mapValues(res, form);
      this.setState({data: res})
    });
  }
  makeAction(obj){
    var id = this.props.params.id;
    AppActions.update(this.props.api, id, obj, (res) => {
      console.log('editado tag_noticia',res)
      this.props.history.pushState(null, "/listar_noticias_tags");
    })
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
              <Form {...this.state} {...this.props} form={form} makeAction={this.makeAction}/>
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
export default EditarTagNoticia
