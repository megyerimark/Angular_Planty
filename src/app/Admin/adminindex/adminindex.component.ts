import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantserviceService } from '../Service/plantservice.service';
import { ToastrService } from 'ngx-toastr';
import { Adminauthsercive } from '../Service/adminauthsercive.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-adminindex',
  templateUrl: './adminindex.component.html',
  styleUrls: ['./adminindex.component.scss']
})
export class AdminindexComponent  implements OnInit{
  currentUser: any;

  constructor(
    private auth:Adminauthsercive,
     private plantserv:PlantserviceService,
    private router :Router,
    private formBuild:FormBuilder,
    private toastr: ToastrService,
    private http:HttpClient,

   ){

    this.plantForm = this.formBuild.group({
      file:null,
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
  plantForm!:FormGroup;
  plants:any;
  data:any;




  ngOnInit(): void {
    this.index();


    // this.plantForm = this.formBuild.group({
    //   file:null,
    //   name:['', Validators.required],
    //   imgpath:['', Validators.required],
    //   description:['', Validators.required],
    //   watering:['', Validators.required],
    //   temperature:['', Validators.required],
    //   light_requirement:['', Validators.required],
    //   humidity:['', Validators.required],
    //   heat_demand:['', Validators.required],

    // });

  }



  index(){
    let jsonUserData: any = localStorage.getItem('currentAdmin');
    let currentUser = JSON.parse(jsonUserData);
    this.plantserv.index(currentUser.token).subscribe({
      next:res=>{
        this.plants = res;
      }
    });
  }




logout(){
  this.auth.logout();
  this.toastr.success('Sikeres kijelentkezés');
  this.router.navigate(['admin/login']);

}

onFileChange(event:Event) {
  const file = (event.target as HTMLInputElement)?.files?.[0];
  this.plantForm.patchValue({
    file:file
  })
}


uploadFile(){
   let jsonCurrentUser: any = localStorage.getItem("currentAdmin");
    let currentUser = JSON.parse(jsonCurrentUser);
  const formData:any = new FormData();
    formData.append('imgpath', this.plantForm.controls['file'].value);
    formData.append('name', this.plantForm.get('name')?.value)
    formData.append('description', this.plantForm.get('description')?.value)
    formData.append('watering', this.plantForm.get('watering')?.value)
    formData.append('temperature', this.plantForm.get('temperature')?.value)
    formData.append('light_requirement', this.plantForm.get('light_requirement')?.value)
    formData.append('humidity', this.plantForm.get('humidity')?.value)
    formData.append('heat_demand', this.plantForm.get('heat_demand')?.value)

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer ' + currentUser.token,
    //   'Content-Type': 'application/json',
    //   'Accept':' text/html, image/gif, image/jpeg'
    // });

    this.plantserv.store( currentUser.token, formData )
        .subscribe({
          next:(data:any) =>{
            console.log(data);
          }
        })

//     this.http.post('http://localhost:8000/api/plant', formData, {headers}).subscribe({
//       next :response => {
//         console.log('File and description saved to database!');
//       }

// });

}

}











