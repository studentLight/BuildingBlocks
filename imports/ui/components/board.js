import './board.html';
import '../components/modals/startBlockModal.js';
import '../components/modals/ifBlockModal.js';
import '../components/modals/thenBlockModal.js';
import '../components/modals/stopBlockModal.js';


/* TRIGGERS startBlockInfoModal = modal-knapp id /Bengt
    #sBModal template class ID
    classnanm,ttriggern har samma klassnamn
    a-taggen = en ikon som referear till html filen
    trigger namn samma som referens
    tycker på trigger, en knapp, trigger ikonen i blocket */

Template.board.events ({

"click .startBlockInfoModal": function(event){
   $('#sBModal').openModal();
 },

 "click .thenBlockInfoModal": function(event){
    $('#tBModal').openModal();
  },

  "click .stopBlockInfoModal": function(event){
     $('#stBModal').openModal();
   },

 "click .ifBlockInfoModal": function(event){
    $('#iBModal').openModal();
  }
});
