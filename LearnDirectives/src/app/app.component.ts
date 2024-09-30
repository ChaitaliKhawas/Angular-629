import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnDirectives';

  color = 'yellow';

  data: any = {
    username: "Chaitali",
    password: "123"
  }

  //1
  numbers: any = [1, 2, 3, 4];

  students: any = [
    {
      id: 1,
      name: "Chaitali",
      age: 25
    },
    {
      id: 2,
      name: "Chaitu",
      age: 24
    }
  ];


  //Attribute Directives

  isHighlight = false;
  highlightOnOff() {
    this.isHighlight = !this.isHighlight;
  }

fontSize='15px';

increase(){
  this.fontSize=(parseInt(this.fontSize) +2) +'px';
}

decrease(){
  this.fontSize=(parseInt(this.fontSize) -2) +'px';
}

}
