import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicangular';
  showMsg = false;
  switchValue = 10; 

  users = [
    { id : 1, name : "java"},
    { id : 2, name : "android"},
    { id : 3, name : "angular"}

  ];
}
