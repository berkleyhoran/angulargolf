import { Component, OnInit } from '@angular/core';
import {info} from '../information';
import {numholes} from '../information';
import {numplayers} from '../information';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  info;
  numholes;
  numplayers;

  constructor() { }

  ngOnInit() {
    this.info = info;
    this.numholes = numholes;
    this.numplayers = numplayers;
    console.log(info[0].name)
    console.log(numholes)
    
    
  }

  changescore(event){
    var target = event.target || event.srcElement;
    let id = target.id;
    let hole = target.parentNode.id;
    let value = target.value;
    console.log(id);
    console.log(hole);
    console.log(value);

    info[id].hole[hole - 1] = value;

    console.log(info[id]);
    

  }

  

}

// function changescore(current : any) : void{

// }
