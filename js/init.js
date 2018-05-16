(function($){
  $(function(){

    $('.sidenav').sidenav();
      
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });     

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.parallax').parallax();
  });
