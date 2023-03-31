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
    let jsonUserData: any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(jsonUserData);

      const name = this.plantForm.value.name;
    const  imgpath  = this.plantForm.value.imgpath;
   const  description = this.plantForm.value.description;
   const watering = this.plantForm.value.watering;
   const  temperature =  this.plantForm.value.temperature;
    const light_requirement =  this.plantForm.value.light_requirement;
   const humidity = this.plantForm.value.humidity;
  const  heat_demand =  this.plantForm.value.heat_demand;




    this.plantserv.store(name, imgpath, description,
      watering, temperature
      ,light_requirement,
      humidity,
      heat_demand, currentUser.token).subscribe({

      next : data =>{
        this.toastr.success("Sikeres felvétel")
        localStorage.setItem('newAuthData', JSON.stringify(data));
       },

       error: err => {
        this.toastr.error('Hiba!A felvétel sikertelen !');
      }

    });

}
logout(){
  this.auth.logout();
  this.toastr.success('Sikeres kijelentkezés');
  this.router.navigate(['admin/login']);

}

}


