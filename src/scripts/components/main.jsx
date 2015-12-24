import React from 'react';
import { ReactDOM, ReactDOMServer, render} from 'react-dom';
import { Router, Route} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHistory from 'history/lib/createHashHistory';

import App from './Interfaces/App.jsx';

/*USUARIO*/

import AltaUsuario from './Interfaces/AltaUsuario';
import EditarUsuario from './Interfaces/EditarUsuario'
import ListarUsuarios from './Interfaces/ListarUsuarios'

/* SLIDE */
import AltaSlide from './Interfaces/AltaSlide';
import EditarSlide from './Interfaces/EditarSlide'
import ListarSlide from './Interfaces/ListarSlide'


/* CONTACTO */
import ListarContactos from './Interfaces/ListarContactos'
import VerContacto from './Interfaces/VerContacto'

/*NOTICIAS*/
import AltaNoticia from './Interfaces/AltaNoticia';
import ListarNoticias from './Interfaces/ListarNoticias'

/* CATEGORÍAS NOTICIAS */
import ListarCategoriasNoticias from './Interfaces/ListarCategoriasNoticias'
import AltaCategoriaNoticia from './Interfaces/AltaCategoriaNoticia'
import EditarCategoriaNoticia from './Interfaces/EditarCategoriaNoticia'

/* TAGS NOTICIAS */

import ListarTagsNoticias from './Interfaces/ListarTagsNoticias'
import AltaTagNoticia from './Interfaces/AltaTagNoticia'
import EditarTagNoticia from './Interfaces/EditarTagNoticia'


/*PORTFOLIO*/
import AltaPortfolio from './Interfaces/AltaPortfolio';
import ListarPortfolio from './Interfaces/ListarPortfolio'


/*Configuración*/
import Configuracion from './Interfaces/Configuracion'

import Example from './Interfaces/Example'





var history = createHistory({
  queryKey: false
});


try {

  require('../styles/main.scss');

  render((

      <Router history={history}>
          <Route path="/" name="listar_usuarios" component={ListarUsuarios}/>
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
          <Route path="/editar_categoria_noticias/:id" name="editar_categoria_noticias" component={EditarCategoriaNoticia}/>
          <Route path="/editar_tag_noticias/:id" name="editar_tag_noticias" component={EditarTagNoticia}/>


          <Route path="/ver_contacto/:id" name="ver_contacto" component={VerContacto}/>



          <Route path="/configuracion" name="configuracion" component={Configuracion}/>

          <Route path="/example" name="example" component={Example}/>


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
