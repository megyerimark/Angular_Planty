import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_Planty';
  homer= false;

  home(){
  this.homer = !this.homer;
  }
 show(){

 }
}
