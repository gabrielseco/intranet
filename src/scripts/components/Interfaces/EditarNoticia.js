import React, { Component, PropTypes } from 'react'
import UISideBar from '../UI/SideBar';
import UIPageHeader from '../UI/PageHeader';
import MainContainer from '../Containers/MainContainer';
import Form from '../Containers/Form';

//using functions to map values
import { mapValues, mapValuesSelect, transformObjectForSelect } from '../../lib'

//flux
import AppActions from '../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../config/config'

var titulo = 'Noticia'


var info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes modificar noticias'
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
    NAME: 'Edición de noticia'
  }
]


var form =
  {
    TITULO:'Modificar noticia',
    ELEMENTS:[
      {
        ID:'activo',
        NAME:'Activo',
        TYPE:'switch',
        CLASS:'',
        VALUE:0,
        EXCLUDE:false

      },
      {
        ID:'fecha',
        NAME:'Fecha',
        TYPE:'datepicker',
        CLASS:'',
        VALUE:'',
        EXCLUDE:false

      },
      {
        ID:'titulo',
        NAME:'Título',
        TYPE:'text',
        CLASS:'form-control',
        TAKECONTROL:'slug',
        VALUE: '',
        REQUIRED: true,
        VALIDATION:'El campo es requerido',
        EXCLUDE:false
      },
      {
        ID:'slug',
        NAME:'URL',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:'',
        EXCLUDE:false
      },
      {
        ID:'categorias_noticias',
        NAME:'Categorías',
        TYPE:'select-multiple',
        CLASS:'',
        VALUE: [],
        SELECTED:[],
        REQUIRED: false,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'tags_noticias',
        NAME:'Tags',
        TYPE:'select-multiple',
        CLASS:'',
        VALUE: [],
        SELECTED:[],
        REQUIRED: false,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'intro',
        NAME:'Intro',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: '',
        EXCLUDE:false
      },
      {
        ID:'texto',
        NAME:'Texto',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: '',
        EXCLUDE:false
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
        NAME: 'Subir imagen',
        TYPE: 'file',
        CLASS: 'btn btn-info fileinput-button',
        EXCLUDE:false
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

class EditarNoticia extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: '', api: 'noticias', select1: 'getAllCategoriesAndTags' }
  }

  componentDidMount(){
    var id = this.props.params.id;
    var obj = {
      categorias_noticias: '',
      tags_noticias: ''
    }
    AppActions.getALL(this.state.api + "/" + this.state.select1 , (res) => {

      var keys = ["id","titulo"];

      obj.categorias_noticias = transformObjectForSelect(keys, res.categorias);
      obj.tags_noticias = transformObjectForSelect(keys, res.tags);

      mapValuesSelect(obj, form);

      AppActions.getOne(this.state.api, id, (res) => {

        res.categorias_noticias = transformObjectForSelect(keys, res.categorias_noticias)
        res.tags_noticias = transformObjectForSelect(keys, res.tags_noticias)

        mapValues(res, form)
        this.setState({data: res})
      });

    });

  }
  makeUpload(){
    var id = this.props.params.id;
    AppActions.uploadNoticia(+id, (res) => {
      console.log('subida la imagen',res)
      this.props.history.pushState(null, "/listar_noticias");
    })
  }
  makeAction(obj){
    var id = this.props.params.id;
    AppActions.update(this.props.api, id, obj, (res) => {
      console.log('editado el la noticia',res)
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
export default EditarNoticia
