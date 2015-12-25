import moment from 'moment'

//transform a date value to the input [type='date']
function transformDateForInput(value){
  return moment(value).format("YYYY-MM-DD");
}

//we pass keys in array and the data we obtain to have a determined format for the select-multiple

export function transformObjectForSelect(keys, data) {
  var _select = [];


  for(var i = 0; i < data.length; i++ ) {
    var obj = {};

    obj.ID = data[i][keys[0]];
    obj.NAME = data[i][keys[1]];

    _select.push(obj);
  }

  return _select;

}

export function mapValues(json, form){
    for(var  i = 0; i < form.ELEMENTS.length; i++) {
      var key = form.ELEMENTS[i].ID;

      if(form.ELEMENTS[i].EXCLUDE !== true) {

        if(form.ELEMENTS[i].TYPE === 'datepicker'){
          form.ELEMENTS[i].VALUE = transformDateForInput(json[key]);
        } else if (form.ELEMENTS[i].TYPE === 'select-multiple'){
          form.ELEMENTS[i].SELECTED = json[key];
        } else {
          form.ELEMENTS[i].VALUE = json[key]
        }
      }
    }
}

export function mapValuesSelect(json, form){
  for(var  i = 0; i < form.ELEMENTS.length; i++) {
    var key = form.ELEMENTS[i].ID;

    if(form.ELEMENTS[i].TYPE === 'select-multiple') {
      form.ELEMENTS[i].VALUE = json[key];
    }
  }
}

export function slugify(type, value) {
  if (type !== 'slug'){
    return value;
  }

  value = value.replace(/^\s+|\s+$/g, ''); // trim
  value = value.toLowerCase(); //minúsucular

  // remove accents, swap ñ for n, etc

  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeeiiiiooooouuuunc------";

  for (var i = 0, l = from.length ; i < l ; i++) {
    value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return value;

}
