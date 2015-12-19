import AppConstants from '../constants/app-constants';
import  { dispatch, register } from '../dispatchers/app-dispatcher';
import axios from 'axios';
var _store = {};


export default {
  getPropertyFromStore(property){
    return _store[property];
  },
  setPropertyForStore(property, value){
    _store[property] = value;
  },
  receiveContacts(cb){
    dispatch({
      actionType: AppConstants.RECEIVE_CONTACTS
    })
    axios.get('http://localhost:1337/contactos')
     .then(function (response) {
       cb (response.data);
     })
  },
  showContact(id, cb){
    dispatch({
      actionType: AppConstants.SHOW_CONTACT
    })
    axios.get('http://localhost:1337/contactos/'+id)
     .then(function (response) {
       cb (response.data);
     })
  },
  deleteContact(id, cb){
    dispatch({
      actionType: AppConstants.DELETE_CONTACT
    });
    axios.delete('http://localhost:1337/contactos/'+id)
         .then(function(response){
           cb(response.data);
         })
  },
  receiveUsers(cb){
    dispatch({
      actionType: AppConstants.RECEIVE_USERS
    })
    axios.get('http://localhost:1337/user')
         .then(function(response){
           cb(response.data);
         })
  },
  addUser(obj,cb) {
    dispatch({
      actionType: AppConstants.ADD_USER
    })
    axios.post('http://localhost:1337/user',obj)
         .then(function(response){
           cb(response.data)
         })
  },
  getUser(id, cb) {
    dispatch({
      actionType: AppConstants.GET_USER
    })
    axios.get('http://localhost:1337/user/'+id)
         .then(function(response){
           cb(response.data)
         })
  },
  editUser(id, obj, cb) {
    dispatch({
      actionType: AppConstants.EDIT_USER
    });

    axios.post('http://localhost:1337/user/'+id, obj)
         .then(function(response){
           cb(response.data);
         })
  },
  deleteUser(id, cb){
    dispatch({
      actionType: AppConstants.DELETE_USER
    });
    axios.delete('http://localhost:1337/user/'+id)
         .then(function(response){
           cb(response.data);
         })
  },
  addSlide(obj,cb) {
    dispatch({
      actionType: AppConstants.ADD_SLIDE
    })
    axios.post('http://localhost:1337/slide',obj)
         .then(function(response){
           cb(response.data)
         })
  },
  uploadSlide(id, imagen, cb) {
    dispatch({
      actionType: AppConstants.UPLOAD_SLIDE
    })
    console.log('imagen act',imagen)
    var data = new FormData();
         data.append('id', +id);
         data.append('file', imagen);
         
    axios.post('http://localhost:1337/slide/uploadImagen/',data)
         .then(function(response){
           cb(response.data)
         })
  },
  receiveSlides(cb){
    dispatch({
      actionType: AppConstants.RECEIVE_SLIDES
    })
    axios.get('http://localhost:1337/slide')
         .then(function(response){
           cb(response.data);
   })
 },
 deleteSlide(id, cb){
   dispatch({
     actionType: AppConstants.DELETE_SLIDE
   });
   axios.delete('http://localhost:1337/slide/'+id)
        .then(function(response){
          cb(response.data);
        })
 },
 getSlide(id, cb) {
   dispatch({
     actionType: AppConstants.GET_SLIDE
   })
   axios.get('http://localhost:1337/slide/'+id)
        .then(function(response){
          cb(response.data)
        })
 },
 editSlide(id, obj, cb) {
   dispatch({
     actionType: AppConstants.EDIT_SLIDE
   });

   axios.post('http://localhost:1337/slide/'+id, obj)
        .then(function(response){
          cb(response.data);
        })
 },
}
