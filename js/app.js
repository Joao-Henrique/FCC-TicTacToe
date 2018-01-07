$(document)
  .ready(function () {

    //SHOW THE TIC TAC TOE LETERS IN THE GAME BOARD
    let gameOn = true;
    gameOn
      ? ($("#" + 0).html("T"), $("#" + 1).html("I"), $("#" + 2).html("C"), $("#" + 3).html("T"), $("#" + 4).html("A"), $("#" + 5).html("C"), $("#" + 6).html("T"), $("#" + 7).html("O"), $("#" + 8).html("E"), $(".tic").css("color", "#795548"))
      : 0;

    //FUNCTION TO CHECK THE WINNER
    function winCondition(turnArray, currentTurn) {
      if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
        gameOn = true;
        reset();
        $('#txt-count').html("Player " + currentTurn + " Won! Top Row !!!") && $('h4').css('color', 'green') && $('h4').css('background-color', 'white')
        alert("Player " + currentTurn + " wins! (Top row across 0,1, and 2 spots)");
      } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (Top row across 2,4, and 6 spots)");
      } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (1st row down 0,3, and 6 spots)");
      } else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (1st row diagonally across 0,4, and 8 spots)");
      } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (2nd row down 1,4, and 7 spots)");
      } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (3rd row down 2,5, and 8 spots)");
      } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (3rd row across 2,4, and 6 spots)");
      } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (Middle row across 3,4, and 5 spots)");
      } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins! (Bottom row across 6,7, and 8 spots)");
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

    $(".tic")
      .click(function () {
        var slot = $(this).attr('id');
        playerTurn(turn, slot);
      });

    //IF USER PLAYS WITH X
    $("#turnX").click(function () {
      reset();
      turn = 'X';
      computersTurn = 'O';
      $("#turnO").removeClass("btn-primary");
      $("#turnX").addClass("btn-primary");
    });

    //IF USER PLAYS WITH O
    $("#turnO").click(function () {
      reset();
      turn = "O";
      computersTurn = 'X'
      $("#turnX").removeClass("btn-primary");
      $("#turnO").addClass("btn-primary");
      $(".tic").text("#");
    });

    function reset() {
      gameOn = false;
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