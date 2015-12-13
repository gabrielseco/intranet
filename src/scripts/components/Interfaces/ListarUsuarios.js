import React, { Component, PropTypes } from 'react'
import moment from 'moment';
import {Link} from 'react-router';
import UISideBar from '../UI/SideBar';
import UIPageHeader from '../UI/PageHeader';
import MainContainer from '../Containers/MainContainer';
import UIDataTable from '../UI/Datatable';
import HigherButton from '../HigherComponents/HigherButton'
import UIButton from '../UI/Button';
import UIModal from '../UI/Modal'


//flux
import AppActions from '../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../config/config'

var plural = 'Usuarios';

var singular = 'Usuario';

var texto = 'Listado de usuarios';

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

var button = {
  TYPE:'ROUND',
  NAME:'',
  CLASS:'btn btn-lg btn-round btn-success',
  ICON: 'md md-add',
  LINK: 'anade_usuario'
}

var infoModal = {
  COMPONENT:singular,
  NAME: ''
}


var tabla = {
  HEADERS:[
    {
      NAME: 'Fecha',
      SORT: true
    },
    {
      NAME:'Usuario',
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
      STORE: 'idUser'
    }

    var editar = {
      CLASS:'btn btn-primary',
      NAME:'Editar',
      refComponent: 'editar',
      LINK:'editar_usuario',
    }

    editar.ID = json[i]["id"];
    borrar.ID = json[i];

    borrar.ACTIONS = AppActions

    var obj = {
      fecha: fecha,
      usuario: json[i]["usuario"],
      editar: <UIButton data={editar}/>,
      eliminar: <UIButton data={borrar} />
    }

    body.push(obj)
  }


  tabla.BODY = body;


}



class ListarUsuarios extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tabla: '', modalLoading: false}
  }
  componentDidMount(){
    var headers = tabla.HEADERS;
    AppActions.receiveUsers((res) => {
      var tabla = mapToTable(res, headers, this.setModal.bind(this))
      this.setState({tabla: tabla})
    });

  }
  setModal(){
    this.setState({
      modalLoading: true
    })
    var info = AppActions.getPropertyFromStore('idUser');
    infoModal.NAME = info.usuario;
  }
  remove(){
    console.log('remove')
    var id = 0;
    info = AppActions.getPropertyFromStore('idUser');

    id = info.id;

    AppActions.deleteUser(id, (res) => {
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
          </div>
          <UIModal {...this.props} data={infoModal} remove={this.remove} loading={this.state.modalLoading}/>
        </div>
        {this.props.children}
      </div>
    );
  } else {
    return (<div></div>)
  }
  }
}



export default ListarUsuarios
