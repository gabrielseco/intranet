import React, { Component, PropTypes } from 'react'
import ArticleTags from './ArticleTags';
import ArticleCategory from './ArticleCategory';
import ShareButtons from './ShareButtons';


class ArticleCategories extends React.Component {
  constructor(props){
    super(props);
    this.tags = ['mysql','nodejs','sailsjs'];
    this.category = ['javascript'];
    this.buttons = [
      {
      icon:'facebook',
      shape:'facebook'
      },
      {
      icon:'twitter',
      shape:'twitter'
      },
      {
      icon:'linkedin',
      shape:'linkedin'
      },
      {
      icon:'envelope',
      shape:'email'
      },
    ];
  }

  render(){
    return(
      <div className='postbottom wrapper'>
        <div className='info'>
          <ArticleTags tags={this.tags}/>
          <ArticleCategory category={this.category}/>
        </div>
        <div className='shareoptions'>
          <ShareButtons buttons={this.buttons}/>
        </div>
      </div>
  )
  //          <ShareButtons buttons={this.buttons}/>
 }
}

export default ArticleCategories
