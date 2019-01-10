import { Component, OnInit } from '@angular/core';
import {info} from '../information';
import {numholes} from '../information';
import {numplayers} from '../information';
import {holeinformation} from '../information';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  info;
  numholes;
  numplayers;
  holeinformation;

  // target;
  // id;
  // hole;
  // value;

  constructor() { }

  ngOnInit() {
    this.info = info;
    this.numholes = numholes;
    this.numplayers = numplayers;
    this.holeinformation = holeinformation;
    console.log(info[0].name)
    console.log(numholes)
    
    
  }

  getinfo(){
    
  }

  changescore(event){
    var target = event.target || event.srcElement;
    var id = target.id;
    var hole = target.parentNode.id;
    var value = parseInt(target.value, 10);
    console.log(id);
    console.log(hole);
    console.log(value);

    info[id - 1].hole[hole - 1] = value;

    console.log(info[id - 1]);

    this.calculatescore(id);

  }

  calculatescore(i){

      let total = 0;

    for (let d = 0; d < info[i - 1].hole.length; d++) {
      let current = info[i - 1].hole[d]
       total += current;
    }
      console.log(total)
      info[i - 1].score = total;

  }

  

}

// function changescore(current : any) : void{

// }
