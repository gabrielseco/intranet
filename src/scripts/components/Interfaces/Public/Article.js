import React, { Component, PropTypes } from 'react'
import { loadStyle, removeStyles } from '../../../lib/resources'
import Home from '../../Containers/Public/Home';
import HeaderPinned from '../../Containers/Public/HeaderPinned';
import SearchForm from '../../Containers/Public/SearchForm';
import Drawer from '../../Containers/Public/Drawer';
import Main from '../../Containers/Public/Main';
import Cover from '../../Containers/Public/Cover';
import Footer from '../../Containers/Public/Footer'


/*ARTICLE IMPORTS*/

import ArticleContent from '../../UI/Public/Articles/ArticleContent';
import ArticleCategories from '../../UI/Public/Articles/ArticleCategories';
import ArticleAuthor from '../../UI/Public/Articles/ArticleAuthor';
import ArticleComments from '../../UI/Public/Articles/ArticleComments';



class Article extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.location.path !== '/intranet'){
      removeStyles(document.body);
      loadStyle("src/assets/css/screen.css")
      loadStyle("src/assets/css/owncss.css")
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
          <ArticleContent/>
          <ArticleCategories/>
          <ArticleAuthor/>
          <ArticleComments/>
          <Footer/>
        </Main>
      </Home>
  )
 }
}

export default Article
