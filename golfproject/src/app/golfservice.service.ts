import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GolfserviceService {

  constructor(
      private http:HttpClient
  ) {}

  public getGolf() {
    return this.http.get('https://golf-courses-api.herokuapp.com/courses')
  }
}
