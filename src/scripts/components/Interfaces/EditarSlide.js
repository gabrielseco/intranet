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
        ID:'imagenFD',
        NAME:'Imagen',
        TYPE:'img',
        CLASS:'img-thumbnail',
        FROM:'SERVER',
        VALUE: 'http://sonarfm.cl/sonarfm/site/artic/20151018/imag/foto_0000000120151018151549.jpg',
        WIDTH:200
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

  function mapValues(json){
    for(var  i = 0; i < form.ELEMENTS.length; i++) {
      var key = form.ELEMENTS[i].ID;

      if(form.ELEMENTS[i].EXCLUDE !== true) {
        form.ELEMENTS[i].VALUE = json[key]
      }
    }

  }

class ModificarSlide extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: '' }
  }

  componentDidMount(){
    var id = this.props.params.id;
    AppActions.getSlide(id, (res) => {
      mapValues(res);
      this.setState({data: res})
    });
  }

  makeAction(obj){
    var id = this.props.params.id;
    AppActions.editSlide(id,obj, (res) => {
      this.props.history.pushState(null, "/listar_slide");
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
              <Form {...this.props} form={form} makeAction={this.makeAction}/>
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
export default ModificarSlide
