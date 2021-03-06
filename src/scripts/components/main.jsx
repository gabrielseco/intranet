import React from 'react';
import { ReactDOM, ReactDOMServer, render} from 'react-dom';
import { Router, Route, NotFoundRoute, IndexRoute} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHistory from 'history/lib/createHashHistory';

import App from './Interfaces/App.jsx';


/* LOGIN */

import Login from './Interfaces/Private/Login'
import NotFound from './Interfaces/Private/NotFound'

/*USUARIO*/

import AltaUsuario from './Interfaces/Private/Usuarios/AltaUsuario';
import EditarUsuario from './Interfaces/Private/Usuarios/EditarUsuario'
import ListarUsuarios from './Interfaces/Private/Usuarios/ListarUsuarios'

/* SLIDE */
import AltaSlide from './Interfaces/Private/Slide/AltaSlide';
import EditarSlide from './Interfaces/Private/Slide/EditarSlide'
import ListarSlide from './Interfaces/Private/Slide/ListarSlide'


/* CONTACTO */
import ListarContactos from './Interfaces/Private/Contacto/ListarContactos'
import VerContacto from './Interfaces/Private/Contacto/VerContacto'

/*NOTICIAS*/
import AltaNoticia from './Interfaces/Private/Noticias/AltaNoticia';
import ListarNoticias from './Interfaces/Private/Noticias/ListarNoticias'
import EditarNoticia from './Interfaces/Private/Noticias/EditarNoticia'

/* CATEGORÍAS NOTICIAS */
import ListarCategoriasNoticias from './Interfaces/Private/Noticias/ListarCategoriasNoticias'
import AltaCategoriaNoticia from './Interfaces/Private/Noticias/AltaCategoriaNoticia'
import EditarCategoriaNoticia from './Interfaces/Private/Noticias/EditarCategoriaNoticia'

/* TAGS NOTICIAS */

import ListarTagsNoticias from './Interfaces/Private/Noticias/ListarTagsNoticias'
import AltaTagNoticia from './Interfaces/Private/Noticias/AltaTagNoticia'
import EditarTagNoticia from './Interfaces/Private/Noticias/EditarTagNoticia'


/*PORTFOLIO*/
import AltaPortfolio from './Interfaces/Private/Portfolio/AltaPortfolio';
import ListarPortfolio from './Interfaces/Private/Portfolio/ListarPortfolio'


/*Configuración*/
import Configuracion from './Interfaces/Private/Configuracion/Configuracion'


//public
//Index
import Index from './Interfaces/Public/Index'
import Contacto from './Interfaces/Public/Contacto'
import Article from './Interfaces/Public/Article'



var history = createHistory({
  queryKey: false
});


try {

  require('../styles/main.scss');

  render((

      <Router history={history}>
          <Route path="/">
            <IndexRoute  name="index" component={Index}/>
          </Route>
          <Route path="/contacto">
            <IndexRoute  name="contacto" component={Contacto}/>
          </Route>
          <Route path="/article/:name" component={Article}>
          </Route>

          <Route path="/intranet" name="login" component={Login}/>
          <Route path="/listar_usuarios" name="listar_usuarios" component={ListarUsuarios}/>
          <Route path="/listar_slide" name="listar_slide" component={ListarSlide}/>
          <Route path="/listar_contactos" name="listar_contactos" component={ListarContactos}/>
          <Route path="/listar_noticias" name="listar_noticias" component={ListarNoticias}/>
          <Route path="/listar_noticias_categorias" name="listar_noticias_categorias" component={ListarCategoriasNoticias}/>
          <Route path="/listar_noticias_tags" name="listar_noticias_tags" component={ListarTagsNoticias}/>
          <Route path="/listar_portfolio" name="listar_portfolio" component={ListarPortfolio}/>


          <Route path="/anade_usuario" name="anade_usuario" component={AltaUsuario}/>
          <Route path="/anade_slide" name="anade_slide" component={AltaSlide}/>
          <Route path="/anade_noticia" name="anade_noticia" component={AltaNoticia}/>
          <Route path="/anade_portfolio" name="anade_portfolio" component={AltaPortfolio}/>
          <Route path="/anade_categoria_noticias" name="anade_categoria_noticias" component={AltaCategoriaNoticia}/>
          <Route path="/anade_tag_noticias" name="anade_tag_noticias" component={AltaTagNoticia}/>

          <Route path="/editar_usuario/:id" name="editar_usuario" component={EditarUsuario}/>
          <Route path="/editar_slide/:id" name="editar_slide" component={EditarSlide}/>
          <Route path="/editar_noticia/:id" name="editar_noticia" component={EditarNoticia}/>

          <Route path="/editar_categoria_noticias/:id" name="editar_categoria_noticias" component={EditarCategoriaNoticia}/>
          <Route path="/editar_tag_noticias/:id" name="editar_tag_noticias" component={EditarTagNoticia}/>


          <Route path="/ver_contacto/:id" name="ver_contacto" component={VerContacto}/>

          <Route path="/configuracion" name="configuracion" component={Configuracion}/>



          <Route path="*" name='not-found' component={NotFound} />



      </Router>
  ), document.getElementById('app'))
} catch(e) {
  render(
    <div>
    <h2>Error: application could not load</h2>
    <pre>
    <strong>{e.toString()}</strong>
    {!!e.stack && (<div><br />{e.stack}</div>)}
    </pre>
    </div>, document.body
  );

  throw e;
}
