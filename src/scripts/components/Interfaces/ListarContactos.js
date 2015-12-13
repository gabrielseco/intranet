import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment';
import UISideBar from '../UI/SideBar';
import UIPageHeader from '../UI/PageHeader';
import MainContainer from '../Containers/MainContainer';
import UIDataTable from '../UI/Datatable';
import UIButton from '../UI/Button';
import UIInput from '../UI/Input';
import UIModal from '../UI/Modal'



//flux
import AppActions from '../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../config/config'

var plural = 'Contactos';

var singular = 'Contacto';

var texto = 'Listado de contactos';

var info = {
    TITULO : plural,
    ICON: 'md md-list',
    TEXTO: texto
}

var breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME: plural
  },
  {
    NAME: texto
  }
]


var infoModal = {
  COMPONENT:singular,
  NAME: ''
}


var tabla = {
  HEADERS:[
    {
      NAME: 'fecha',
      SORT: true,
    },
    {
      NAME:'nombre',
      SORT: true,
    },
    {
      NAME:'Ver',
      SORT: false,
    },
    {
      NAME:'Borrar',
      SORT: false,
    }
  ],
  BODY:[

  ]
};


function mapToTable(json, headers, modal){


  var body = [];


  for(var i = 0; i < json.length; i++){
    var fecha = moment(json[i]["alta"]).format("DD/MM/YYYY")

    var borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      refComponent: 'eliminar',
      ACTION: modal,
      STORE: 'idContacto'
    }

    var editar = {
      CLASS:'btn btn-primary',
      NAME:'Ver',
      refComponent: 'ver',
      LINK:'ver_contacto',
    }

    editar.ID = json[i]["id"];
    borrar.ID = json[i];

    borrar.ACTIONS = AppActions

    var obj = {
      fecha: fecha,
      usuario: json[i]["nombre"],
      editar: <UIButton data={editar}/>,
      eliminar: <UIButton data={borrar} />
    }

    body.push(obj)
  }


  tabla.BODY = body;


}

class ListarContactos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tabla:'', modalLoading: ''}

  }
  componentDidMount(){
    var headers = tabla.HEADERS;
    AppActions.receiveContacts((res) => {
      var tabla = mapToTable(res, headers, this.setModal.bind(this))
      this.setState({tabla: tabla})
    });

  }
  setModal(){
    this.setState({
      modalLoading: true
    })
    var info = AppActions.getPropertyFromStore('idContacto');
    infoModal.NAME = info.nombre;
  }
  remove(){
    console.log('remove')
    var id = 0;
    info = AppActions.getPropertyFromStore('idContacto');

    id = info.id;

    AppActions.deleteContact(id, (res) => {
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
              <UIDataTable data={tabla}/>
            </section>
          </div>
          <UIModal {...this.props} data={infoModal} remove={this.remove} loading={this.state.modalLoading}/>
        </div>
        {this.props.children}
      </div>
    );
  } else {
    return(<div></div>)
  }
}
}
export default ListarContactos
