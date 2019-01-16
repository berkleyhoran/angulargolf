import { Component, OnInit } from '@angular/core';
import {info} from '../information';
import {numholes} from '../information';
import {numplayers} from '../information';
import {holeinformation} from '../information';
import { namefixer } from '../numberpipe';
import { winner } from '../information';
import { thebest } from '../information';
import { scorehidden } from '../information';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  info;
  numholes;
  numplayers;
  holeinfo;
  thebest;
  scorehidden;

  calculatescore : winner;
  

  constructor() { }

  ngOnInit() {
    this.holeinfo = holeinformation;
    this.info = info;
    this.numholes = numholes;
    this.numplayers = numplayers;
    this.thebest = thebest;
    this.scorehidden = scorehidden;

    
    
    
  }

}
