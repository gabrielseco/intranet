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

var info = {
    TITULO : 'Usuarios',
    ICON: 'md md-list',
    TEXTO: 'Listado de usuarios'
}

var breadcrumb = [
  {
    NAME: 'GGSECO.COM'
  },
  {
    NAME: 'Usuarios'
  },
  {
    NAME: 'Listado de usuarios'
  }
]


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

var button = {
  TYPE:'ROUND',
  NAME:'',
  CLASS:'btn btn-lg btn-round btn-success',
  ICON: 'md md-add',
  LINK: 'anade_usuario'
}

var infoModal = {
  NAME:'Usuario',
}


function mapToTable(json, headers, remove){


  var body = [];


  for(var i = 0; i < json.length; i++){
    var fecha = moment(json[i]["alta"]).format("DD/MM/YYYY")

    var borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      refComponent: 'eliminar',
      ACTION: 'Usuario'
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
    this.state = {tabla: ''}
  }
  componentDidMount(){
    var headers = tabla.HEADERS;
    AppActions.receiveUsers((res) => {
      var tabla = mapToTable(res, headers, this.remove)
      this.setState({tabla: tabla})
    });
  }
  remove(){
    console.log('remove')
    var id = 0;
    id = AppActions.getPropertyFromStore('idUser');
    /*AppActions.editUser(id,obj, (res) => {
      this.props.history.pushState(null, "/");
    })*/
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
          <UIModal data={infoModal} remove={this.remove}/>
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
