module.exports.config = {
  NAME: 'GGSECO.COM',
  PROFILE: {
    NAME: 'Gabriel',
    EMAIL: 'ggarciaseco@gmail.com',
    RIGHTS: 'ADMIN'
  }
};

module.exports.menu = [
  {
    ID:'usuarios',
    NAME: 'Usuarios',
    ICON: 'md-account-box',
    CHILDREN:[
      {
        NAME: 'Listado de usuarios',
        LINK: '/',
        ID:'listar-usuarios',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade usuario',
        LINK: '#/anade_usuario',
        ID:'anade-usuario',
        NOTIFICATIONS:''
      }
    ],
  },
  {
    ID:'slide',
    NAME: 'Slide',
    ICON: 'md-insert-photo',
    CHILDREN:[
      {
        NAME: 'Listado de banners',
        LINK: '/#listar_slide',
        ID:'listar-slide',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade banner',
        LINK: '#/anade_slide',
        ID:'anade-slide',
        NOTIFICATIONS:''
      }
    ],
  },
  {
    ID:'noticias',
    NAME: 'Noticias',
    ICON: 'md-event',
    CHILDREN:[
      {
        NAME: 'Listado de noticias',
        LINK: '/#listar_noticias',
        ID:'listar-noticias',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade noticia',
        LINK: '#/anade_noticia',
        ID:'anade-noticia',
        NOTIFICATIONS:''
      }
    ],
  },
  {
    ID:'portfolio',
    NAME: 'Portfolio',
    ICON: 'md-book',
    CHILDREN:[
      {
        NAME: 'Listado de portfolio',
        LINK: '/#listar_portfolio',
        ID:'listar-portfolio',
        NOTIFICATION:''
      },
      {
        NAME: 'Añade portfolio',
        LINK: '#/anade_portfolio',
        ID:'anade-portfolio',
        NOTIFICATIONS:''
      }
    ],
  },
  {
    ID:'contacto',
    NAME: 'Contacto',
    ICON: 'md-message',
    LINK: '/#listar_contactos',
    CHILDREN:[]
  },
  {
    ID:'configuracion',
    NAME: 'Configuración',
    ICON: 'md-mode-edit',
    LINK: '/#configuracion',
    CHILDREN:[]
  }

]
