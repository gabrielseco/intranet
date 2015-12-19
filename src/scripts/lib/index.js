function mapValues(json, form){
    for(var  i = 0; i < form.ELEMENTS.length; i++) {
      var key = form.ELEMENTS[i].ID;

      if(form.ELEMENTS[i].EXCLUDE !== true) {
        form.ELEMENTS[i].VALUE = json[key]
      }
    }
}

module.exports = mapValues;
