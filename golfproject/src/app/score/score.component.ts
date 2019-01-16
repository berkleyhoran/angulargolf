import { Component, OnInit } from '@angular/core';
import {info, thebest} from '../information';
import {numholes} from '../information';
import {numplayers} from '../information';
import {holeinformation} from '../information';
import { winner } from '../information'
import { scorehidden } from '../information';

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
  scorehidden;

  best : winner = {
    highestscore: 0,
    thebest:"no one"
  };

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
    this.best = this.best;
    this.scorehidden = scorehidden;
    
    
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

    this.findbest();

  }

  findbest(){
    this.best.highestscore = Math.min(info[0].score,info[1].score,info[2].score,info[3].score);
    if(info[0].score == this.best.highestscore && info[0].isPlaying){
      this.best.highestscore = info[0].name;
      thebest.splice(0, 10);
      thebest.push(this.best.highestscore);
      this.scorehidden = false;
    }
    if(info[1].score == this.best.highestscore && info[1].isPlaying){
      this.best.highestscore = info[1].name;
      thebest.splice(0, 10);
      thebest.push(this.best.highestscore);
      this.scorehidden = false;
    }
    if(info[2].score == this.best.highestscore && info[2].isPlaying){
      this.best.highestscore = info[2].name;
      thebest.splice(0, 10);
      thebest.push(this.best.highestscore);
      this.scorehidden = false;
    }
    if(info[3].score == this.best.highestscore && info[3].isPlaying){
      this.best.highestscore = info[3].name;
      thebest.splice(0, 10);
      thebest.push(this.best.highestscore);
      this.scorehidden = false;
    }
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
