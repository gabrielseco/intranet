import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router';
import UISideBar from '../UI/SideBar';
import UIPageHeader from '../UI/PageHeader';
import MainContainer from '../Containers/MainContainer';
import Form from '../Containers/Form';

//config tiene el menú y la configuración del usuario
import config from '../../config/config'



class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <UISideBar data={config}/>
        {this.props.children}
      </div>
    );
  }
}
export default App
