import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GolfserviceService {

    result : any;
    onchanged : boolean = false;

  constructor(
      private http:HttpClient
  ) {}
  private url = 'https://golf-courses-api.herokuapp.com/courses/';

  public getGolf(callback: Function): any {
    let parent = this;
    this.http.get(this.url).subscribe(function(res) {
      
      parent.setResult(res);
      
        setTimeout(function tester(){

          
              if(res == undefined){
                tester();
              }
              else{
                parent.setResult(res);
                callback(res);
              }
          }, 10);
        
    })
    return this.result;
  }

  public getInfo(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  public getInfoID(id): Observable<any[]>{
    return this.http.get<any[]>(this.url + id);
  }

  public getGolfID(id:number, callback: Function): any {
    let parent = this;
    this.http.get(this.url + id).subscribe(function(res) {
      parent.setResult(res);
      callback(res);
    })
    return this.result;
  }

  setResult(res:any) {
    this.result = res.courses;
    console.log(res);
  }
}

//export var result = this.getGolf().subscribe(res => this.result = res);
