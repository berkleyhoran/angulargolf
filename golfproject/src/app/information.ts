import { Player } from './player';

export var info = [];

export var numholes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

export var numplayers = [1,2,3,4];

var player1 = new Player(
    'Player',
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    true
  )
  var player2 = new Player(
    'Player2',
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    false
  )
  var player3 = new Player(
    'Player3',
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    false
  )
  var player4 = new Player(
    'Player4',
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    false
  )

  info.push(player1)
  info.push(player2)
  info.push(player3)
  info.push(player4)
  