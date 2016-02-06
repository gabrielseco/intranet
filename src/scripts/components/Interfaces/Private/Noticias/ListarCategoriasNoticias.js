import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment';
import UISideBar from '../../../UI/SideBar';
import UIPageHeader from '../../../UI/PageHeader';
import MainContainer from '../../../Containers/MainContainer';
import UIDataTable from '../../../UI/Datatable';
import HigherButton from '../../../HigherComponents/HigherButton'
import UIButton from '../../../UI/Button';
import UIInput from '../../../UI/Input';
import UIModal from '../../../UI/Modal'



//flux
import AppActions from '../../../../actions/app-actions';

//config tiene el menú y la configuración del usuario
import config from '../../../../config/config'

var titulo = 'Categorías';

var texto = 'Listado de categorías';

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
    NAME: 'Noticias'
  },
  {
    NAME: titulo
  },
  {
    NAME: texto
  }
]


var infoModal = {
  COMPONENT:'Categoría',
  NAME: ''
}


var tabla = {
  HEADERS:[
    {
      NAME:'Activo',
      SORT:true
    },
    {
      NAME:'Titulo',
      SORT: true,
    },
    {
      NAME:'Editar',
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

var button = {
  TYPE:'ROUND',
  NAME:'',
  CLASS:'btn btn-lg btn-round btn-success',
  ICON: 'md md-add',
  LINK: 'anade_categoria_noticias'
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
      STORE: 'idCategoriaNoticia'
    }

    var editar = {
      CLASS:'btn btn-primary',
      NAME:'Editar',
      refComponent: 'editar',
      LINK:'editar_categoria_noticias',
    }

    editar.ID = json[i]["id"];
    borrar.ID = json[i];

    borrar.ACTIONS = AppActions

    var obj = {
      activo: json[i]["activo"] ? "Sí" : "No",
      usuario: json[i]["titulo"],
      editar: <UIButton data={editar}/>,
      eliminar: <UIButton data={borrar} />
    }

    body.push(obj)
  }


  tabla.BODY = body;


}

class ListarCategoriasNoticias extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tabla:'',api: 'categorias_noticias', modalLoading: ''}

  }
  componentDidMount(){
    var headers = tabla.HEADERS;
    AppActions.getALL(this.state.api, (res) => {
      var tabla = mapToTable(res, headers, this.setModal.bind(this))
      this.setState({tabla: tabla})
    });

  }
  setModal(){
    this.setState({
      modalLoading: true
    })
    var info = AppActions.getPropertyFromStore('idCategoriaNoticia');
    infoModal.NAME = info.titulo;
  }
  remove(){
    console.log('remove')
    var id = 0;
    info = AppActions.getPropertyFromStore('idCategoriaNoticia');

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
          </div>
          <UIModal {...this.props} data={infoModal} remove={this.remove.bind(this)} loading={this.state.modalLoading}/>
        </div>
        {this.props.children}
      </div>
    );
  } else {
    return(<div></div>)
  }
}
}
export default ListarCategoriasNoticias
