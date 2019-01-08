import { Component, OnInit } from '@angular/core';
import {info} from '../information';
import {numplayers} from '../information';
import {currentsettings} from '../information';
import {Details} from '../details';

@Component({
  selector: 'app-golfinfo',
  templateUrl: './golfinfo.component.html',
  styleUrls: ['./golfinfo.component.css']
})
export class GolfinfoComponent implements OnInit {

  info;
  numplayers;

  model = new Details(
    "",
    ""
  );

  constructor() { }

  ngOnInit() {
    this.info = info;
    this.numplayers = numplayers;
  }

  submitdetails(){
    currentsettings.course = this.model.course;
    currentsettings.tee = this.model.tee;
    console.log(currentsettings)
  }

}
