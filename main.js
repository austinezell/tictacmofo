"use strict"

var init = function(){
  var circleValues = [];
  var exValues = [];
  var circle = true;

  var onClick = function(e){
    var $square = $(this);
    var $squareValues = $square.data("id")
    if (circle){
      addValuesAndSort($squareValues, circleValues);
      $square.addClass('circle')
      circle = false;
    }
    else{
      addValuesAndSort($squareValues, exValues);
      $square.addClass('ex')
      circle = true;
    }
    $square.off()
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
        var winner = "circle"
      }
      else{
        var winner = "ex"
      }
      $(".box").off()
      alert(winner + " wins!")
    }
  }
  $(".box").click(onClick)
}

$(document).ready(init)
