"use strict"

var init = function(){
  var circleValues = [];
  var exValues = [];
  var circle = true;
  var catsCount = 0;
  var winner = ""

  var onClick = function(e){
    var $square = $(this);
    $square.off()
    var $squareValues = $square.data("id")
    if (circle){
      winner = "Black"
      $square.addClass('circle')
      addValuesAndSort($squareValues, circleValues);
      circle = false;
    }
    else{
      winner = "Grey";
      $square.addClass('ex')
      addValuesAndSort($squareValues, exValues);
      circle = true
    }
  }

  function addValuesAndSort(squareValues, playerValues){
    squareValues.forEach(function(value){
      playerValues.push(value);
      playerValues.sort();
    });
    checkWin(playerValues);
  }

  function checkWin(values){
    var stringValues = values.join("");
    var win = /(\d)\1\1/.test(stringValues);
    if (win){
      $(".box").off()
      alert(winner + " wins!")
      return
    }
    if (++catsCount === 9){
      alert("Cat's Game")
    }
  }
  $(".box").click(onClick)
}
$(document).ready(init)
