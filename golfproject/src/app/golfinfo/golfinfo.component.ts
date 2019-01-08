import { Component, OnInit } from '@angular/core';
import {info} from '../information';
import {numplayers} from '../information';
import {currentsettings} from '../information';
import {Details} from '../details';
import { GolfserviceService } from '../golfservice.service';

@Component({
  selector: 'app-golfinfo',
  templateUrl: './golfinfo.component.html',
  styleUrls: ['./golfinfo.component.css']
})
export class GolfinfoComponent implements OnInit {


  public golf$: any;


  availablecourses;
  res;
  info;
  numplayers;

  model = new Details(
    "",
    ""
  );

  constructor(private golfservice: GolfserviceService) { }

  ngOnInit() {
    this.info = info;
    this.numplayers = numplayers;
    this.golfservice.getGolf().subscribe(res => this.golf$ = res); 
    this.golf$.courses = this.availablecourses;
    console.log(this.availablecourses)
  }

  submitdetails(){
    currentsettings.course = this.model.course;
    currentsettings.tee = this.model.tee;
  }

}
