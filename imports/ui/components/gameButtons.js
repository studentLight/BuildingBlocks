import './board.html';
import '../components/gameButtons.html';
import '../components/blocks/startBlock.html';
import '../components/blocks/endBlock.html';
import '../components/blocks/ifBlock.html';
import '../components/blocks/thenBlock.html';


/* skriva händelsefunktion för varje enskild button
   onclick? events? lyssna efter event?
   använda ID't för att skriva lyssnar-funktioner
   ska generera respektive block bild på gameboard
   med textuell beskrivning dropdowns, etc
   funtkioner för start, if, then, end */
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

}

function displayBlock(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}

// $("#startButton")({
//   //innehåll
//
// });

  // console.log("hej");

  // $('#startButton').on('click', function () {
  //  startButton.textContent = "something"
  // });
