"use strict"

var init = function(){
  var circleValues = [];
  var exValues = [];
  var circle = true;
  var catsCount = 0;

  var onClick = function(e){
    var $square = $(this);
    var $squareValues = $square.data("id")
    if (circle){
      $square.addClass('circle')
      addValuesAndSort($squareValues, circleValues);
      circle = false;
    }
    else{
      $square.addClass('ex')
      addValuesAndSort($squareValues, exValues);
      circle = true;
    }
    catsCount++
    $square.off()
    if (catsCount === 9){
      alert("Cat's Game")
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
      if (circle){
        var winner = "black"
      }
      else{
        var winner = "grey"
      }
      $(".box").off()
      alert(winner + " wins!")
    }
  }
  $(".box").click(onClick)
}

$(document).ready(init)
