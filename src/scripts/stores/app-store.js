import AppConstants from '../constants/app-constants';
import  { dispatch, register } from '../dispatchers/app-dispatcher';
import  { EventEmitter } from 'events';
import axios from 'axios';

const CHANGE_EVENT =  'change';

var contacts = [];



for (let i = 0; i < 20; i++) {
  contacts.push({
    'FECHA': '20/12/2015',
    'NOMBRE': 'contacto #'+i,
    'EDITAR':'<Button class="btn btn-info">Ver</button>',
    'BORRAR':'<button class="btn btn-danger">Borrar</button>'
    })
}

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getContacts(cb){
   return contacts;
  },

  dispatcherIndex: register( function( action ){
    switch(action.actionType){
      case AppConstants.RECEIVE_CONTACTS:
                _receiveContacts();
                break;
    }

    AppStore.emitChange();

  })
});

export default AppStore
