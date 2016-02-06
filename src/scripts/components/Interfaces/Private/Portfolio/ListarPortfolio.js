import React, { Component, PropTypes } from 'react'
import UISideBar from '../../../UI/SideBar';
import UIPageHeader from '../../../UI/PageHeader';
import MainContainer from '../../../Containers/MainContainer';
import UIDataTable from '../../../UI/Datatable';
import HigherButton from '../../../HigherComponents/HigherButton'

//config tiene el menú y la configuración del usuario
import config from '../../../../config/config'

var titulo  = 'Portfolio'
var texto   = 'Listado de portfolios'

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
    {
        FECHA:'20/10/12',
        ACTIVO: 'Si',
        NOMBRE: 'Slide',
        EDITAR:'<Button class="btn btn-primary">Editar</button>',
        BORRAR:'<button class="btn btn-danger">Borrar</button>'
    },
    {
        FECHA:'20/10/12',
        ACTIVO: 'No',
        Nombre:'Slide 2',
        EDITAR:'<button class="btn btn-primary">Editar</button>',
        BORRAR: '<button class="btn btn-danger">Borrar</button>'
    },

  ]
};

var button = {
  TYPE:'ROUND',
  NAME:'',
  CLASS:'btn btn-lg btn-round btn-success',
  ICON: 'md md-add',
  LINK: 'anade_portfolio'
}



class ListarPortfolio extends React.Component {

  render() {

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
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default ListarPortfolio
