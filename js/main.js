$(document).ready(function(){

  createGrid(16);

});

function createGrid(size){

  var newHeight=640;

    if(isNaN(size) || size == null){
      var size = 16;
    }
    var s=640/size;
    var h=440/size;


    $('.board').append("<div class='container'></div>");


    for(var i=0; i<size; i++){

      $(".container").append("<div class='row'></div>");

      for(var j=0; j<size; j++){
        $(".container").append("<div class='gridspace'></div>");
        $(".gridspace").css("width",s);
        $(".gridspace").css("height",s);
        $(".gridspace").hover(
          function(){
            $(this).addClass("hovered");
          },
          function(){$(this).addClass("hovered");
          }
        );

      }

    }
}

function clearCanvas(s){
  $('.container').remove(); //remove old grid
  createGrid(s);             //create new grid
}

function changeGridSize(){
  var gridSize=prompt("Please enter grid size between 1 and 40 (this may take a moment)","16");
  clearCanvas(gridSize);
}
