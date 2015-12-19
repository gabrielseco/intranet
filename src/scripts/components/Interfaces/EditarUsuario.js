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

var titulo = 'Usuarios'

var info = {
    TITULO : titulo,
    ICON: 'md-mode-edit',
    TEXTO: 'Desde este formulario puedes modificar usuarios'
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
    NAME: 'Edición de usuario'
  }
]

var form =
  {
    TITULO:'Edición de usuario',
    ELEMENTS:[
      {
        ID:'activo',
        NAME:'Activo',
        TYPE:'switch',
        CLASS:'',
        VALUE:1,

      },
      {
        ID:'usuario',
        NAME:'Usuario',
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
        EXCLUDE: true
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


class EditarUsuario extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: '' }
  }

  componentDidMount(){
    var id = this.props.params.id;
    AppActions.getUser(id, (res) => {
      mapValues(res);
      this.setState({data: res})
    });
  }

  makeAction(obj){
    var id = this.props.params.id;
    AppActions.editUser(id,obj, (res) => {
      this.props.history.pushState(null, "/");
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
export default EditarUsuario
