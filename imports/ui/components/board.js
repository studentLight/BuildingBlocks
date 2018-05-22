import './board.html';

function cPageInit() {
  $(document).ready(function() {
    $('select').material_select();
  });
}

Template.board.rendered = function(){
  cPageInit();
};
