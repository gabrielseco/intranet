import React, { Component, PropTypes } from 'react'
import BackgroundCover from '../../UI/Public/Cover/BackgroundCover'
import HeaderCover from '../../UI/Public/Cover/HeaderCover'
import HeaderTitleCover from '../../UI/Public/Cover/HeaderTitleCover'
import NavCover from '../../UI/Public/Cover/NavCover'
import SectionCover from '../../UI/Public/Cover/SectionCover'
import MouseCoverScroll from '../../UI/Public/Cover/MouseCoverScroll'


var list_items = [
  {
    TITLE: 'Contacto',
    URL: '/#contacto'
  }
]

class Cover extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='cover front'>
        <BackgroundCover URL="http://www.ggseco.com/wp-content/uploads/2015/01/hoodvista.jpg"/>
        <HeaderCover>
          <HeaderTitleCover URL="http://www.ggseco.com" title="Gabriel García Seco"/>
          <NavCover items={list_items}/>
        </HeaderCover>
        <SectionCover URL="http://www.ggseco.com" title="Gabriel García Seco" description="Desarrollo Web | Music & More"/>
        <MouseCoverScroll/>
      </div>
  )
 }
}

export default Cover
