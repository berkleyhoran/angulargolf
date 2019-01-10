import { Player } from './player';
import { Details } from './details';
import { GolfserviceService } from './golfservice.service';
import { Holeinfo } from './holeinfo';


//api.push(GolfserviceService.golf$.courses)

export var info = [];

export var numholes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

export var numplayers = [1,2,3,4];

export var currentsettings = new Details(
  0,
  ""
)

export var holeinformation = new Holeinfo(
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
)

var player1 = new Player(
    'Player',
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    false,
    0
  )
  var player2 = new Player(
    'Player2',
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    false,
    0
  )
  var player3 = new Player(
    'Player3',
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    false,
    0
  )
  var player4 = new Player(
    'Player4',
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    false,
    0
  )

  info.push(player1)
  info.push(player2)
  info.push(player3)
  info.push(player4)
  