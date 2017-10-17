import { Component } from '@angular/core';
import { ScoreService } from './score.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = ''
  score ;
  error;

  constructor(private _scoreService: ScoreService){
  }
 onSubmit(){
   this._scoreService.retrieveTasks(this.username, (data)=>{
     this.score = data;
     console.log('this is score', this.score)
   },(err)=>{
     this.error = err;
   });

 }

}
