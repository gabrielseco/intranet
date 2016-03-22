import React, { Component, PropTypes } from 'react'



class ArticleAuthor extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className='widget authorprofile'>
        <div className='wrapper'>
          <div className="info" itemProp="author" itemScope="" itemType="http://schema.org/Person">
            <a href="http://www.ggseco.com/author/ggarciasecogmail-com/" className="profile gravatar">
              <img src="http://0.gravatar.com/avatar/3b145835eab7c39514ace92887dd529b?s=160"
              itemProp="image" alt="Gabriel García Seco" originals="80"
              width="80" height="80" src-orig="http://0.gravatar.com/avatar/3b145835eab7c39514ace92887dd529b?s=80" scale="2" id="grav-3b145835eab7c39514ace92887dd529b-3"
              className="grav-hashed" data-no-retina="true"/>
            </a>
            <div className="meta">
              <span className="title">Autor</span>
              <h3 itemProp="name">
                <a href="http://www.ggseco.com/author/ggarciasecogmail-com/" itemProp="url" rel="author">Gabriel García Seco</a>
              </h3>
              <a href="http://twitter.com/GGarciaSeco10" target="_blank" className="twittertag">@GGarciaSeco10</a></div>
          </div>
        <p>Web developer | Music & More</p>
        <ul className="authorsocial">
          <li>
            <a href="https://twitter.com/GGarciaSeco10" target="_blank" className="socialdark twitter">
            <i className="fa fa-twitter"></i>
            </a>
          </li>
        <li>
          <a href="https://www.facebook.com/gabriel.garciaseco" target="_blank" className="socialdark facebook">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/gabrielseco" target="_blank" className="socialdark github">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="http://es.linkedin.com/in/gabrielgarciaseco" target="_blank" className="socialdark linkedin">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/matdry" target="_blank" className="socialdark soundcloud">
            <i className="fa fa-soundcloud"></i>
          </a>
        </li>
        </ul>
        </div>
      </div>
    )
  }
}

export default ArticleAuthor
