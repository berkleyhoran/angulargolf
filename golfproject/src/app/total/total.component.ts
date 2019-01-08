import { Component, OnInit } from '@angular/core';
import {info} from '../information';
import {numholes} from '../information';
import {numplayers} from '../information';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  info;
  numholes;
  numplayers;

  constructor() { }

  ngOnInit() {
    this.info = info;
    this.numholes = numholes;
    this.numplayers = numplayers;
    
    
  }

}
