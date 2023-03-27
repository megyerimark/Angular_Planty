import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homer= false;

  home(){
  this.homer = !this.homer;
  }
 show(){

 }

}
