import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-homework',
  templateUrl: './second-homework.component.html',
  styleUrls: ['./second-homework.component.css']
})
export class SecondHomeworkComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {
  }

  resetUsername(){
    this.username = '';
  }

}
