import React, { Component, PropTypes } from 'react'
import moment from 'moment';
import UISideBar from '../UI/SideBar';
import UIPageHeader from '../UI/PageHeader';
import MainContainer from '../Containers/MainContainer';
import UIDataTable from '../UI/Datatable';
import HigherButton from '../HigherComponents/HigherButton'
import UIButton from '../UI/Button';
import UIModal from '../UI/Modal'
import UIImagen from '../UI/Imagen'

//flux
import AppActions from '../../actions/app-actions';




//config tiene el menú y la configuración del usuario
import config from '../../config/config'

var titulo = 'Noticias';
var texto  = 'Listado de noticias';

var info = {
    TITULO : titulo,
    ICON: 'md md-list',
    TEXTO: texto
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
    NAME: texto
  }
]


var tabla = {
  HEADERS:[
    {
      NAME:'Imagen',
      SORT: false
    },
    {
      NAME:'Activo',
      SORT: true
    },
    {
      NAME:'Nombre',
      SORT: true
    },
    {
      NAME:'Ver',
      SORT: false
    },
    {
      NAME:'Borrar',
      SORT: false
    }
  ],
  BODY:[
  ]
};

var button = {
  TYPE:'ROUND',
  NAME:'',
  CLASS:'btn btn-lg btn-round btn-success',
  ICON: 'md md-add',
  LINK: 'anade_noticia'
}

var infoModal = {
  COMPONENT:'Noticia',
  NAME: ''
}

function mapToTable(json, headers, modal){


  var body = [];


  for(var i = 0; i < json.length; i++){

    var borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      refComponent: 'eliminar',
      ACTION: modal,
      STORE: 'idNoticia'
    }

    var editar = {
      CLASS:'btn btn-primary',
      NAME:'Editar',
      refComponent: 'editar',
      LINK:'editar_noticia',
    }

    editar.ID = json[i]["id"];
    borrar.ID = json[i];

    borrar.ACTIONS = AppActions

    var imagen = {
      URL:"http://localhost:1337/images/"+json[i]["imagenFD"],
      WIDTH:200,
      TITLE:json[i]["titulo"]
    }
    var obj = {
      imagen: <UIImagen data={imagen}/>,
      activo: json[i]["activo"] ? "Sí" : "No",
      titulo: json[i]["titulo"],
      editar: <UIButton data={editar}/>,
      eliminar: <UIButton data={borrar} />
    }

    body.push(obj)
  }


  tabla.BODY = body;


}



class ListarNoticias extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tabla: '',api:'noticias', modalLoading: false}
  }

  componentDidMount(){
    var headers = tabla.HEADERS;
    AppActions.getALL(this.state.api, (res) => {
      console.log('slides',res)
      var tabla = mapToTable(res, headers, this.setModal.bind(this))
      this.setState({tabla: tabla})
    });

  }
  setModal(){
    this.setState({
      modalLoading: true
    })
    var info = AppActions.getPropertyFromStore('idNoticia');
    infoModal.NAME = info.titulo;
  }
  remove(){
    console.log('remove')
    var id = 0;
    info = AppActions.getPropertyFromStore('idNoticia');

    id = info.id;

    AppActions.delete(this.state.api, id, (res) => {
      location.reload()
    });

  }

  render() {
    if(this.state.tabla !== ''){
    return (
      <div>
        <UISideBar data={config}/>
        <div className='main-container'>
          <MainContainer data={breadcrumb}/>
          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className='forms-advanced'>
              <UIPageHeader info={info}/>
              <div className='p-b-10'>
                <HigherButton data={button}/>
              </div>
              <UIDataTable data={tabla}/>
            </section>
            <UIModal {...this.props} data={infoModal} remove={this.remove.bind(this)} loading={this.state.modalLoading}/>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  } else {
    return (<div></div>);
  }
  }
}
export default ListarNoticias
