var game_map = document.getElementById('map');



//////////////////////////////////////////
var player_tank = new Tank( "blue" );
    player_tank.render();
var bot_tank = new Tank( "green" );
    bot_tank.render();

function action(e){
    switch (e.keyCode) {
        case 38: player_tank.moveUp();    break;
        case 39: player_tank.moveRight(); break;
        case 40: player_tank.moveDown();  break;
        case 37: player_tank.moveLeft();  break;
    }
}


document.body.addEventListener( 'keydown', action );
