import { Component, OnInit } from '@angular/core';
import {info} from '../information';
import {Names} from '../names'

@Component({
  selector: 'app-golf-card',
  templateUrl: './golf-card.component.html',
  styleUrls: ['./golf-card.component.css']
})
export class GolfCardComponent implements OnInit {

  info;

  model = new Names(
    "player",
    1
  );
  

  constructor() { }

  ngOnInit() {
    this.info = info;
  }

  submit(){
    info[this.model.playernum - 1].name = this.model.name;
    info[this.model.playernum - 1].isPlaying = true;
  }

}
