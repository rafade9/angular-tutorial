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
    this.logs.push({'id' : this.logs.length + 1})
    this.niceApp = !this.niceApp;
  }

  getLogColor(log){
    if(log.id > 4)
      return 'blue';
  }

}
