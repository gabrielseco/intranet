export function mapValues(json, form){
    for(var  i = 0; i < form.ELEMENTS.length; i++) {
      var key = form.ELEMENTS[i].ID;

      if(form.ELEMENTS[i].EXCLUDE !== true) {
        form.ELEMENTS[i].VALUE = json[key]
      }
    }
}

export function slugify(type, value){
  if (type !== 'slug'){
    return value;
  }

  return value.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');
}
