import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment';
import UISideBar from '../UI/SideBar';
import UIPageHeader from '../UI/PageHeader';
import MainContainer from '../Containers/MainContainer';
import UIDataTable from '../UI/Datatable';
import UIButton from '../UI/Button';
import UIInput from '../UI/Input';


//flux
import AppActions from '../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../config/config'
var titulo = 'Contactos'
var texto = 'Listado de contactos'

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

function getKeys(json){
  var keys = [];
  Object.keys(json[0]).map((key, i) => {
    var newKey = key.charAt(0).toUpperCase() + key.substring(1, key.length);
    keys.push(key);
  });
  return keys;
}

function mapToTable(json, headers){

  var borrar = {
    CLASS:'btn btn-danger',
    NAME:'Eliminar',
    refComponent: 'eliminar'
  }


  var body = [];

  for(var i = 0; i < json.length; i++){
    var fecha = moment(json[i]["alta"]).format("DD/MM/YYYY")
    var ver = {
      CLASS:'btn btn-primary',
      NAME:'Ver',
      refComponent: 'ver',
      LINK:'ver_contacto'
    }

    ver.ID = json[i]["id"];
    var obj = {
      fecha: fecha,
      nombre: json[i]["nombre"],
      ver: <UIButton data={ver}/>,
      eliminar: <UIButton data={borrar}/>
    }

    body.push(obj)
  }

  tabla.BODY = body;


}


class ListarContactos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tabla:''}

  }
  componentDidMount(){
    var headers = tabla.HEADERS;
    AppActions.receiveContacts((res) => {
      console.log(res)
      var tabla = mapToTable(res, headers)
      this.setState({tabla: tabla})
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
