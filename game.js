var game_map = document.getElementById('map');



//////////////////////////////////////////

var player_tank = new Tank( "green" );
      player_tank.render();

// var player = prompt( "Cu ce echipa joci???" , "green sau blue" );
// if (player == "green") {
//   var player_tank = new Tank( "green" );
//       player_tank.render();
// }else if (player == "blue") {
//   var bot = new Tank( "blue" );
//       bot.render();
// }



function action(e){
    switch (e.keyCode) {
        case 38: player_tank.moveUp();    break;
        case 39: player_tank.moveRight(); break;
        case 40: player_tank.moveDown();  break;
        case 37: player_tank.moveLeft();  break;
    }
}


document.body.addEventListener( 'keydown', action );
