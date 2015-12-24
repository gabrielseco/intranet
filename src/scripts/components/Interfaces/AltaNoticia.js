import React, { Component, PropTypes } from 'react'
import moment from 'moment';
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


var titulo = 'Noticia';

var info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear noticias'
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
    TITULO:'Alta de noticia',
    ELEMENTS:[
      {
        ID:'activo',
        NAME:'Activo',
        TYPE:'switch',
        CLASS:'',
        VALUE:0,
        EXCLUDE:true

      },
      {
        ID:'fecha',
        NAME:'Fecha',
        TYPE:'datepicker',
        CLASS:'',
        VALUE:moment().format("YYYY-MM-DD"),
        EXCLUDE:true

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
        EXCLUDE:true
      },
      {
        ID:'slug',
        NAME:'URL',
        TYPE:'text',
        CLASS:'form-control',
        VALUE: '',
        REQUIRED: false,
        VALIDATION:'',
        EXCLUDE:true
      },
      {
        ID:'categorias_noticias',
        NAME:'Categorías',
        TYPE:'select-multiple',
        CLASS:'',
        VALUE: [],
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'tags_noticias',
        NAME:'Tags',
        TYPE:'select-multiple',
        CLASS:'',
        VALUE: [],
        REQUIRED: true,
        VALIDATION:'El campo es requerido'
      },
      {
        ID:'intro',
        NAME:'Intro',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: '',
        EXCLUDE:true
      },
      {
        ID:'texto',
        NAME:'Texto',
        TYPE:'note',
        CLASS:'wysiwyg',
        VALUE: '',
        EXCLUDE:true
      },
      {
        ID: 'imagen',
        NAME: 'Subir imagen',
        TYPE: 'file',
        CLASS: 'btn btn-info fileinput-button',
        EXCLUDE:true
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
    this.state = {data: false, api: 'noticias', select1:'categorias_noticias', select2:'tags_noticias'}

  }
  componentDidMount(){
    var obj = {
      categorias_noticias: '',
      tags_noticias: ''
    }
    AppActions.getALL(this.state.select1, (res) => {
      var json = [];
      for(var i = 0; i < res.length; i++){
        var j = {};
        j.ID = res[i].id
        j.NAME = res[i].titulo;
        json.push(j)
      }
      obj.categorias_noticias = json;
      AppActions.getALL(this.state.select2, (res) => {
        var json = []
        for(var i = 0; i < res.length; i++){
          var j = {};
          j.ID = res[i].id
          j.NAME = res[i].titulo;
          json.push(j)
        }
        obj.tags_noticias = json;

        mapValues(obj, form)
        this.setState({data:true})
      });

    });


  }
  makeUpload(id){
    AppActions.uploadNoticia(id, (res) => {
      console.log('subida la imagen',res)
      this.props.history.pushState(null, "/listar_noticias");
    })
  }
  makeAction(obj){
    AppActions.add(this.props.api, obj, (res) => {
      console.log('crear noticia',res)
      this.props.makeUpload.bind(this)(res.id)
    })
  }

  render() {
    if(this.state.data){
      console.log('form',form)
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
  } else return(<div></div>)
  }
}
export default AltaNoticia
