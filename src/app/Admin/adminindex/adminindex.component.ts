import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantserviceService } from '../Service/plantservice.service';

@Component({
  selector: 'app-adminindex',
  templateUrl: './adminindex.component.html',
  styleUrls: ['./adminindex.component.scss']
})
export class AdminindexComponent  implements OnInit{

  constructor( private plantserv:PlantserviceService,
    router :Router,
    private formBuild:FormBuilder){

  }



  ngOnInit(): void {
    this.index();
   
  }
  plantForm!:FormGroup;
  plants:any;

  index(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.plantserv.index(currentUser.token).subscribe({
      next:res=>{
        this.plants = res;
        
     
      }
    });
  }


}
