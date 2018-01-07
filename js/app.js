$(document)
  .ready(function () {

    //SHOW THE TIC TAC TOE LETERS IN THE GAME BOARD
    let gameOn = true;
    gameOn
      ? ($("#" + 0).html("T"), $("#" + 1).html("I"), $("#" + 2).html("C"), $("#" + 3).html("T"), $("#" + 4).html("A"), $("#" + 5).html("C"), $("#" + 6).html("T"), $("#" + 7).html("O"), $("#" + 8).html("E"), $(".tic").css("color", "#795548"))
      : 0;

    //FUNCTION TO PLACE CHARACTER WHEN USER CLICKS THE BOARD
    $(".tic").click(function () {
      var slot = $(this).attr('id');
      playerTurn(turn, slot);
    });

    //FUNCTION TO CHECK THE WINNER AND TRANSFORM THE BOARD ACCUORDINGLY
    function winCondition(turnArray, currentTurn) {

      //INNER FUNCTION TO SHOW THE WIN SPOTS
      const showWinCombination = (winSpots, firstSpot, secondSpot, thirdSpot) => {
        $('#txt-count').html("Player " + currentTurn + " Won! " + winSpots + " !!!") && $('h4').css('color', 'green') && $('h4').css('background-color', 'white');
        gameOn = true;

        //INNER FUNCTION TO CHANHE COLOR OF WINNER SPOTS
        const highlight = (colorOne, colorTwo) => {
          $("#" + firstSpot)
            .css('color', colorOne)
            .css('background-color', colorTwo);
          $("#" + secondSpot)
            .css('color', colorOne)
            .css('background-color', colorTwo);
          $("#" + thirdSpot)
            .css('color', colorOne)
            .css('background-color', colorTwo);
        }

        highlight('#FFEB3B', '#795548');
        window.setTimeout(function () {
          $('#txt-count').html("Go Go Go !!! Good Luck ") && $('h4').css('color', '#FFEB3B') && $('h4').css('background-color', '#795548');
          highlight('#795548', '#FFEB3B');
          reset();
        }, 3000);
      };

      //GAME LOGIC
      if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
        showWinCombination("Top Row", 0, 1, 2);
      } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
        showWinCombination("Middle Row", 3, 4, 5);
      } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
        showWinCombination("Bottom Row", 6, 7, 8);
      } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
        showWinCombination("Diagonal", 2, 4, 6);
      } else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
        showWinCombination("Diagonal", 0, 4, 8);
      } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
        showWinCombination("Left Colum", 0, 3, 6);
      } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
        showWinCombination("Middle Colum", 1, 4, 7);
      } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
        showWinCombination("Right Colum", 2, 5, 8);
      } else if (count > 4) {
        $('#txt-count').html("It's a Draw !!! Try to focus now ") && $('h4').css('color', '#795548') && $('h4').css('background-color', 'white');
        window.setTimeout(function () {
          $('#txt-count').html("Go Go Go !!! Good Luck ") && $('h4').css('color', '#FFEB3B') && $('h4').css('background-color', '#795548');
          reset();
        }, 3000);
      } else {
        gameOn = false;
      }
    }

    //FUNCTION FOR PLAYER'S TURN
    function playerTurn(turn, id) {
      var spotTaken = $("#" + id).text();
      if (spotTaken === "#") {
        count++;
        $("#" + id).css("color", "#795548");
        $("#" + id).text(turn);
        turns[id] = turn;
        winCondition(turns, turn);
        if (gameOn === false) {
          computerTurn();
          winCondition(turns, computersTurn);
        }
      }
    }

    //FUNCTION FOR COMPUTER'S TURN
    function computerTurn() {
      var taken = false;
      while (taken === false && count !== 5) {
        var computersMove = (Math.random() * 10).toFixed();
        var move = $("#" + computersMove).text();
        if (move === '#') {
          $('#' + computersMove).text(computersTurn);
          $('#' + computersMove).css("color", "#795548");
          taken = true;
          turns[computersMove] = computersTurn;
        }
      }
    }

    //IF USER PLAYS WITH X
    $("#turnX")
      .click(function () {
        reset();
        turn = 'X';
        computersTurn = 'O';
        $("#turnO")
          .removeClass("btn-primary")
          .addClass("bordered");
        $("#turnX")
          .removeClass("bordered")
          .addClass("btn-primary");
        $('#txt-count').html("Go Go Go !!! Good Luck ") && $('h4').css('color', '#FFEB3B') && $('h4').css('background-color', '#795548');
      });

    //IF USER PLAYS WITH O
    $("#turnO").click(function () {
      reset();
      turn = "O";
      computersTurn = 'X'
      $("#turnX")
        .removeClass("btn-primary")
        .addClass("bordered");
      $("#turnO")
        .removeClass("bordered")
        .addClass("btn-primary");
      $(".tic").text("#");
      $('#txt-count').html("Go Go Go !!! Good Luck ") && $('h4').css('color', '#FFEB3B') && $('h4').css('background-color', '#795548');
    });

    //RESET FUNCTION
    function reset() {
      turns = [
        "#",
        "#",
        "#",
        "#",
        "#",
        "#",
        "#",
        "#",
        "#"
      ];
      count = 0;
      $(".tic")
        .text("#")
        .css("color", "transparent");
      gameOn = false;
    }
  });