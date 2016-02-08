  import React, { Component, PropTypes } from 'react'

  import Home from '../../Containers/Public/Home';
  import HeaderPinned from '../../Containers/Public/HeaderPinned';
  import SearchForm from '../../Containers/Public/SearchForm';
  import Drawer from '../../Containers/Public/Drawer';
  import Main from '../../Containers/Public/Main';


  class Index extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      return(
        <Home>
          <HeaderPinned/>
          <SearchForm/>
          <Drawer/>
          <Main/>
        </Home>
    )
   }
  }

  export default Index
