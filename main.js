"use strict"

var init = function(){
  var circleValues = [];
  var $board = $('.board');
  var $box = $('.box');
  var exValues = [];
  var circle = true;
  var catsCount = 0;
  var winner = '"O"'
  $board.removeClass('hide').addClass('animated bounceInUp')

  var onClick = function(e){
    var $square = $(this);
    $square.off()
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
      $box.off()
      if (!circle) {
        winner = '"X"'
      }
      sweetAlert(winner + " wins!")
      return
    }
    if (++catsCount === 9){
      sweetAlert("Cat's Game")
    }
  }
  $box.click(onClick)
}
$(document).ready(init)
