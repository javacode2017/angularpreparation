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
  colorvalue= 'green';
  classname = 'two';
  classname1 = 'three';

  users = [
    { id : 1, name : "java"},
    { id : 2, name : "android"},
    { id : 3, name : "angular"}

  ];

  propertybind = 'Property Binding will be used for adding data to ngStyles and innerHTML';

  fullName: string = " ";    

  showAlert(id){
    alert('event binding example...' + id);
  }

  


  


}
