/**
 * Created by jcfga on 31/01/2017.
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('ground', 'resources/sprites/background.png')
    game.load.image('body', 'resources/sprites/body.png')

}

    var ground;
    var player;
    var body;
    var body_parts;
    var cursors;

function create() {

    //game.physics.startSystem(Phaser.Physics.ARCADE);

    //background
    ground = game.add.sprite( 0, 0, 'ground');
    ground.height = game.height;
    ground.width = game.width;

    //player
    player = game.add.sprite( 0, 0, 'body');
    game.physics.arcade.enable(player);

    //player's body
    body = game.add.group();

    //Axis lines
    var aux = 0;
    var graphics = game.add.graphics( 0, 0);
    graphics.lineStyle( 1, 0xFFFFFF, 1); //line width, line colour, alpha(vai de 0 a 1, 0 é transparente)

    //X lines
    for(var i = 0; i < game.width; i += 50){
        graphics.moveTo(i, aux);
        graphics.lineTo(i, aux + game.height);
    }

    //Y lines
    for(var i = 0; i < game.height; i += 50){
        graphics.moveTo( aux, i);
        graphics.lineTo( aux + game.width, i);
    }

    //controls
    cursors = game.input.keyboard.createCursorKeys();

}

var direc = 0; //direçao na qual o player se movera sozinho

function update() {

    if ((cursors.right.isDown) && (player.x <= 749)){
        player.x += 50;
        direc = 'right';
    }
    else if ((cursors.left.isDown) && (player.x >= 1)){
        player.x -= 50;
        direc = 'left';
    }
    else if((cursors.up.isDown) && (player.y >= 1)){
        player.y -= 50;
        direc = 'up';
    }
    else if ((cursors.down.isDown) && (player.y <= 549)){
        player.y += 50;
        direc = 'down';
    }

    switch (direc){

        case 'right':
            player.x += 50;
            break;

        case 'left':
            break;

        case 'up':
            break;

        case 'down':
            break;

    }
    //new_body_parts();
}