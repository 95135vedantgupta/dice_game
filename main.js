var value_1;
var value_2;
var pic;
var P_1 = 0, P_2 = 0;


var image_tracker = 'giphy';
var image_tracker2 = 'giphy';
var image_tracker3 = 'start';


function change() {
  var image = document.getElementById('dice_gif');
  var image2 = document.getElementById('dice_gif2');
  var image3 = document.getElementById('start_game');

   image_tracker = 'giphy';
   image_tracker2 = 'giphy';
   image_tracker3 = 'start';


  if (value_1 == 1) {
    image.src = 'images/dice1.png';
    image_tracker = 'dice1';
  }
  else if (value_1 == 2) {
    image.src = 'images/dice2.png';
    image_tracker = 'dice2';
  }
  else if (value_1 == 3) {
    image.src = 'images/dice3.png';
    image_tracker = 'dice3';
  }
  else if (value_1 == 4) {
    image.src = 'images/dice4.png';
    image_tracker = 'dice4';
  }
  else if (value_1 == 5) {
    image.src = 'images/dice5.png';
    image_tracker = 'dice5';
  }
  else {
    image.src = 'images/dice6.png';
    image_tracker = 'dice6';
  }


  if (value_2 == 1) {
    image2.src = 'images/dice1.png';
    image_tracker2 = 'dice1';
  }
  else if (value_2 == 2) {
    image2.src = 'images/dice2.png';
    image_tracker2 = 'dice2';
  }
  else if (value_2 == 3) {
    image2.src = 'images/dice3.png';
    image_tracker2 = 'dice3';
  }
  else if (value_2 == 4) {
    image2.src = 'images/dice4.png';
    image_tracker2 = 'dice4';
  }
  else if (value_2 == 5) {
    image2.src = 'images/dice5.png';
    image_tracker2 = 'dice5';
  }
  else {
    image2.src = 'images/dice6.png';
    image_tracker2 = 'dice6';
  }


  image3.src='images/again.png';
  image_tracker3 = 'again';

}



function game_start() {

  value_1 = Math.floor((Math.random() * 6) + 1);
  value_2 = Math.floor((Math.random() * 6) + 1);

  if (value_1 > value_2) {
    document.getElementById('result').innerHTML = '🔥Player_1 wins!';
    P_1++;
    document.getElementById('score1').innerHTML = `${P_1}`;
  } else if (value_1 < value_2) {
    document.getElementById('result').innerHTML = 'Player_2 wins!🔥';
    P_2++;
    document.getElementById('score2').innerHTML = `${P_2}`;
  } else {
    document.getElementById('result').innerHTML = '🔥DRAW!🔥';
  }

  change();
}



document.getElementById('start_game').onclick = () => {
  if(image_tracker3 ==='start'){
    game_start();
  }
  else if(image_tracker3 ==='again'){
    image_tracker3 ='start';
    var set_button_to_start=document.getElementById('start_game');
    set_button_to_start.src = 'images/start.png';
    var set_image_to_gif1=document.getElementById('dice_gif');
    set_image_to_gif1.src = 'images/giphy.gif';
    var set_image_to_gif2=document.getElementById('dice_gif2');
    set_image_to_gif2.src = 'images/giphy.gif';
    document.getElementById('result').innerHTML = 'THE DICE GAME!';
  }
}

document.getElementById('reset_game').onclick = () => {
  document.getElementById('result').innerHTML = 'THE DICE GAME!';
  document.getElementById('score1').innerHTML = '0';
  document.getElementById('score2').innerHTML = '0';
  P_1 = 0;
  P_2 = 0;
}
