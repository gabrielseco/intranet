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

var titulo = 'Slide'
var texto  = 'Listado de banners'

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
      NAME: 'Fecha',
      SORT: true
    },
    {
      NAME: 'Activo',
      SORT: true
    },
    {
      NAME:'Imagen',
      SORT: false
    },
    {
      NAME:'Nombre',
      SORT: true
    },
    {
      NAME:'Editar',
      SORT: false
    },
    {
      NAME:'Borrar',
      SORT: false
    }
  ],
  BODY:[]
};

var button = {
  TYPE:'ROUND',
  NAME:'',
  CLASS:'btn btn-lg btn-round btn-success',
  ICON: 'md md-add',
  LINK: 'anade_slide'
};

var infoModal = {
  COMPONENT:'Slide',
  NAME: ''
}

function mapToTable(json, headers, modal){


  var body = [];


  for(var i = 0; i < json.length; i++){
    var fecha = moment(json[i]["alta"]).format("DD/MM/YYYY")

    var borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      refComponent: 'eliminar',
      ACTION: modal,
      STORE: 'idSlide'
    }

    var editar = {
      CLASS:'btn btn-primary',
      NAME:'Editar',
      refComponent: 'editar',
      LINK:'editar_slide',
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
      fecha: fecha,
      activo: json[i]["activo"] ? "Sí" : "No",
      imagen: <UIImagen data={imagen}/>,
      titulo: json[i]["titulo"],
      editar: <UIButton data={editar}/>,
      eliminar: <UIButton data={borrar} />
    }

    body.push(obj)
  }


  tabla.BODY = body;


}

class ListarSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabla: '',api:'slide', modalLoading: false}
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
    var info = AppActions.getPropertyFromStore('idSlide');
    infoModal.NAME = info.titulo;
  }
  remove(){
    console.log('remove')
    var id = 0;
    info = AppActions.getPropertyFromStore('idSlide');

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
  }
  else {
    return (<div></div>)
  }
}
}
export default ListarSlide
