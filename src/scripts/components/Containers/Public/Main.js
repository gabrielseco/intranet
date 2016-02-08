import React, { Component, PropTypes } from 'react'
import Cover from './Cover';
import PostList from './PostList';
import Footer from './Footer'

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='pagewrapper'>
          <Cover/>
          <PostList/>
          <Footer/>
      </div>
  )
 }
}

export default Main
