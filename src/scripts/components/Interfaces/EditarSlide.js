import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router';
import UISideBar from '../UI/SideBar';
import UIPageHeader from '../UI/PageHeader';
import MainContainer from '../Containers/MainContainer';
import Form from '../Containers/Form';

//using functions to map values
import { mapValues } from '../../lib'

//flux
import AppActions from '../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../config/config'

var titulo = 'Slide'


var info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes modificar banners nuevos'
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
    NAME: 'Edición de banner'
  }
]


var form =
  {
    TITULO:'Modificar banner',
    ELEMENTS:[
      {
        ID:'activo',
        NAME:'Activo',
        TYPE:'switch',
        CLASS:'',
        VALUE:''
      },
      {
        ID:'titulo',
        NAME:'Título',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: ''
      },
      {
        ID:'enlace',
        NAME:'Enlace',
        TYPE:'text',
        CLASS:'form-control',
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
        ID:'imagenFD',
        NAME:'Imagen',
        TYPE:'img',
        CLASS:'img-thumbnail',
        FROM:'SERVER',
        VALUE: '',
        WIDTH:200
      },
      {
        ID: 'imagen',
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

class EditarSlide extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: '', api: 'slide' }
  }

  componentDidMount(){
    var id = this.props.params.id;
    AppActions.getOne(this.state.api, id, (res) => {
      mapValues(res, form);
      this.setState({data: res})
    });
  }
  makeUpload(){
    var id = this.props.params.id;
    AppActions.uploadSlide(+id, (res) => {
      console.log('subida la imagen',res)
      this.props.history.pushState(null, "/listar_slide");
    })
  }
  makeAction(obj){
    var id = this.props.params.id;
    AppActions.update(this.props.api, id, obj, (res) => {
      console.log('editado el slide',res)
      this.props.makeUpload.bind(this)()
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
              <Form {...this.state} {...this.props} form={form} makeAction={this.makeAction} makeUpload={this.makeUpload}/>
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
export default EditarSlide
