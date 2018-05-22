import './dropdown.html';

document.addEventListener('dropMe', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});

// Or with jQuery

// $(document).ready(function(){
//   $('.select').formSelect();
// });
