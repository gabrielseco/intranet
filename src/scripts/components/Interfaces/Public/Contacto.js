import React, { Component, PropTypes } from 'react'
import { loadStyle, removeStyles } from '../../../lib/resources'
import Home from '../../Containers/Public/Home';
import HeaderPinned from '../../Containers/Public/HeaderPinned';
import SearchForm from '../../Containers/Public/SearchForm';
import Drawer from '../../Containers/Public/Drawer';
import Main from '../../Containers/Public/Main';
import Cover from '../../Containers/Public/Cover';
import FormContacto from '../../Containers/Public/FormContacto';
import Footer from '../../Containers/Public/Footer'



class Contacto extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.location.path !== '/intranet'){
      removeStyles(document.body);
      loadStyle("src/assets/css/screen.css")
      loadStyle("https://fonts.googleapis.com/css?family=Oxygen%3A400%2C700%7CVarela+Round%3A400%7CMontserrat%3A400%7CNoto+Serif%3A400%2C700%7C&ver=3.1.0")

    }
  }

  render(){
    return(
      <Home {...this.props}>
        <HeaderPinned/>
        <SearchForm/>
        <Drawer/>
        <Main>
          <Cover/>
          <FormContacto/>
          <Footer/>
        </Main>
      </Home>
  )
 }
}

export default Contacto
