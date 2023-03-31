import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantserviceService } from '../Service/plantservice.service';
import { ToastrService } from 'ngx-toastr';
import { Adminauthsercive } from '../Service/adminauthsercive.service';

@Component({
  selector: 'app-adminindex',
  templateUrl: './adminindex.component.html',
  styleUrls: ['./adminindex.component.scss']
})
export class AdminindexComponent  implements OnInit{




  constructor(
    private auth:Adminauthsercive,
     private plantserv:PlantserviceService,
    private router :Router,
    private formBuild:FormBuilder,
    private toastr: ToastrService,
   ){

  }
  plantForm!:FormGroup;
  plants:any;
  data:any;



  ngOnInit(): void {
    this.index();


    this.plantForm = this.formBuild.group({
      name:['', Validators.required],
      imgpath:['', Validators.required],
      description:['', Validators.required],
      watering:['', Validators.required],
      temperature:['', Validators.required],
      light_requirement:['', Validators.required],
      humidity:['', Validators.required],
      heat_demand:['', Validators.required],

    });

  }



  index(){
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);
    this.plantserv.index(currentUser.token).subscribe({
      next:res=>{
        this.plants = res;
      }
    });
  }


  store(){
    let jsonCurrentUser: any = localStorage.getItem("currentUser");
    let currentUser = JSON.parse(jsonCurrentUser);
    let plant ={
      name: this.plantForm.value.name,
      imgpath:  this.plantForm.value.imgpath,
      description:  this.plantForm.value.description,
      watering:  this.plantForm.value.watering,
      temperature:  this.plantForm.value.temperature,
      light_requirement: this.plantForm.value.light_requirement,
      humidity: this.plantForm.value.humidity,
      heat_demand: this.plantForm.value.heat_demand
    }
    this.plantserv.store(plant, currentUser.token).subscribe({
      next:res=>{
        console.log('sikeres feltöltés')
        // 
      }
    })
  }
  
logout(){
  this.auth.logout();
  this.toastr.success('Sikeres kijelentkezés');
  this.router.navigate(['admin/login']);

}

}


