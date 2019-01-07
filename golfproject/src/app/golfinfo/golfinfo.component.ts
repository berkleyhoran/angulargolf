import { Component, OnInit } from '@angular/core';
import {info} from '../information';
import {numplayers} from '../information';

@Component({
  selector: 'app-golfinfo',
  templateUrl: './golfinfo.component.html',
  styleUrls: ['./golfinfo.component.css']
})
export class GolfinfoComponent implements OnInit {

  info;
  numplayers;

  constructor() { }

  ngOnInit() {
    this.info = info;
    this.numplayers = numplayers;
  }

}
