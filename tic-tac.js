	'use strict'

  var WINNER_DATA = [[1,2,3], [1,4,7], [1,5,9], [2,5,8], [3,6,9], [3,5,7], [4,5,6], [7,8,9]];

  var firstSign = 'O';
  var secondSign = 'X';

  var O_DATA_G = [];
  var X_DATA_G = [];

  var O_DATA = [];
  var X_DATA = [];

	var $gameSign = firstSign;

  function O() {
    $gameSign = secondSign;
  };

  function X() {
    $gameSign = firstSign;
  };

  function switchClickSign() {
    window[$gameSign]();
  };

  function checkWinner() {

  };


  $(document).ready(function() {

  	$('#game').find('td').on('click', function(e) {
      var clickPosition = $(e.target).data('position');
    	$(e.target).html($gameSign);

      if(window[$gameSign+'_DATA'].length === 3) {
        window[$gameSign+'_DATA_G'].push(window[$gameSign+'_DATA']);
        window[$gameSign+'_DATA'] = []
      }

      window[$gameSign+'_DATA'].push(clickPosition);

      if(window[$gameSign+'_DATA'].length === 3) {

        var sortedPositionArray = window[$gameSign+'_DATA'].sort().join('');
        for(var i=0; i < WINNER_DATA.length; i++) {
          if(sortedPositionArray == WINNER_DATA[i].join('')) {
            alert("winner: "+ $gameSign);
          }
        }

      }

      switchClickSign();
  	});

  });
