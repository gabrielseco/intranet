export function loadStyle(href) {
  // avoid duplicates
  for(var i = 0; i < document.styleSheets.length; i++){
      if(document.styleSheets.href == href){
          return;
      }
  }
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = href;
  head.appendChild(link);
}

export function removeStyles(){
  Array.prototype.forEach.call(document.querySelectorAll('style,[rel="stylesheet"],[type="text/css"]'), function(element){
  try{
    element.parentNode.removeChild(element)
  }catch(err){}
  });
}

export function loadJS( scripts ) {
  var fileref = document.createElement('script');
          fileref.setAttribute("type", "text/javascript");
          fileref.setAttribute("src", scripts[i]);
          document.head.appendChild(fileref)
  }
