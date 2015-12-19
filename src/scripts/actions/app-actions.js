import AppConstants from '../constants/app-constants';
import  { dispatch, register } from '../dispatchers/app-dispatcher';
import axios from 'axios';
var _store = {};

var url = 'http://localhost:1337/';


export default {
  getPropertyFromStore(property){
    return _store[property];
  },
  setPropertyForStore(property, value){
    _store[property] = value;
  },
  getALL(api, cb){
    axios.get(url + api)
     .then(function (response) {
       console.log(response)
       cb (response.data);
     })
  },
  getOne(api, id, cb){
    axios.get(url + api +"/"+id)
     .then(function (response) {
       cb (response.data);
     })
  },
  add(api, obj, cb){
    axios.post(url + api, obj)
         .then(function(response){
           cb(response.data)
    })
  },
  update(api, id, obj, cb){
    axios.post(url + api + "/"+id, obj)
         .then(function(response){
           cb(response.data);
    })
  },
  delete(api, id, cb){
    axios.delete(url + api + "/" + id)
         .then(function(response){
           cb(response.data);
    })
  },
  uploadSlide(id, cb) {
    var imagen = this.getPropertyFromStore('imagen');
    console.log(imagen)
    if(imagen !== undefined){
    var data = new FormData();
        data.append('id', +id);
        data.append('file', imagen);


    axios.post('http://localhost:1337/slide/uploadImagen/',data)
         .then(function(response){
           cb(response.data)
         })
    } else {
      cb(id)
    }
  },
}
