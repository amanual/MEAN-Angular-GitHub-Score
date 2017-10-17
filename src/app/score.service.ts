import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreService {
  tasks = ['drink coffee or tea', 'build a web app'];

  constructor(private _http: Http) { }

  retrieveTasks(username, callback, err){

    this._http.get('https://api.github.com/users/' + username).subscribe( 
      (response) => {
      callback(response.json()) }, 
      (error) => {
        err(error.json())
        console.log( 'this is error',error); } 
    );
  
  }
 
  createTask(task){
    this.tasks.push(task);
  }
}
