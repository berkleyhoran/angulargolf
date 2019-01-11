import { Component, OnInit } from '@angular/core';
import {info} from '../information';
import {numplayers} from '../information';
import {currentsettings} from '../information';
import {Details} from '../details';
import {holeinformation} from '../information';
import { GolfserviceService } from '../golfservice.service';


@Component({
  selector: 'app-golfinfo',
  templateUrl: './golfinfo.component.html',
  styleUrls: ['./golfinfo.component.css']
})
export class GolfinfoComponent implements OnInit {


  public golf$: any;
  public courseinfo: any;
  public onchanged : boolean;

  availablecourses;
  res;
  info;
  numplayers;
  inform;

  model = new Details(
    0,
    0
  );

  constructor(private golfservice: GolfserviceService) { }

  ngOnInit() {
    this.info = info;
    this.numplayers = numplayers;
    this.golfservice.getInfo().subscribe((info) =>{
      this.info = info;
      console.log(info)
    })

    
  }

  submitdetails(){
    currentsettings.course = this.model.course;
    currentsettings.tee = this.model.tee;
    console.log(this.model);

    this.fillinfo();
    
  }

  changedhole(){
    currentsettings.course = this.model.course;
    console.log(currentsettings.course);
    this.golfservice.getInfoID(currentsettings.course).subscribe((courseinfo) =>{
      this.courseinfo = courseinfo;
      console.log(this.courseinfo)
      
    })

    

  }

  fillinfo(){

      let ref = this.courseinfo.data.holes;
      let totalpar = 0;

      for (let h = 0; h < ref.length; h++) {
        holeinformation.yards[h] = ref[h].teeBoxes[parseInt(currentsettings.tee, 10) - 1].yards;
        holeinformation.handi[h] = ref[h].teeBoxes[parseInt(currentsettings.tee, 10) - 1].hcp;
        holeinformation.par[h] = ref[h].teeBoxes[parseInt(currentsettings.tee, 10) - 1].par;
        totalpar += holeinformation.par[h];
        
      }
      holeinformation.totalpar = totalpar;
      console.log(holeinformation)

  }

}
