import './board.html';
import '../components/gameButtons.html';
import '../components/blocks/startBlock.html';
import '../components/blocks/endBlock.html';
import '../components/blocks/ifBlock.html';
import '../components/blocks/thenBlock.html';


/* skriva händelsefunktion för varje enskild button
   använda ID't för att skriva lyssnar-funktioner
   ska generera respektive block bild på gameboard
   med textuell beskrivning dropdowns, etc
   inkludera färgsättning, seesion & responsiv block
   placering
   */
window.onload = function() {

  var startbtn = document.getElementById("startButton");
  var endbtn = document.getElementById("endButton");
  var ifbtn = document.getElementById("ifButton");
  var thenbtn = document.getElementById("thenButton");

  //startbutton för block
  var intitiateStartBlock = function() {
    startbtn.textContent = "success!"
    displayBlock();
    // ska skapa block bild i gameboard template div
    // med textuell beskrivning dropdowns, etc
  };

  startbtn.addEventListener('click', intitiateStartBlock, false);

  /* visa bild på gameboard */
  function displayBlock(src, width, height, alt) {
    var img = document.createElement("img");
    img.setAttribute("src", "images/StartBlock.png");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.getElementById("placeBlock").appendChild(img);
  }

}
  // console.log("TEST123");

  // $('#startButton').on('click', function () {
  //  startButton.textContent = "something"
  // });
