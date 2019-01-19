import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-homework',
  templateUrl: './third-homework.component.html',
  styleUrls: ['./third-homework.component.css']
})
export class ThirdHomeworkComponent implements OnInit {

  niceApp = true;
  logs = [

  ];

  constructor() { }

  ngOnInit() {
  }

  onDetailsClick(){
    this.logs.push(Math.random());
    this.niceApp = !this.niceApp;
  }

  getLogColor(index){
    if(index > 4)
      return 'green';
  }

}
