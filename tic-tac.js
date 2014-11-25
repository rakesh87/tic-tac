	'use strict'

	var $gameSign = "O";

  function switchClickSign() {
    if($gameSign === 'O') {
      $gameSign = 'X';
    }
    else {
      $gameSign = 'O';
    }
  };

  function checkWinner() {

  };

  $(document).ready(function() {
  	
  	$('#game').find('td').on('click', function(e) {
    	$(e.target).html($gameSign);
    switchClickSign();
  	});

  });