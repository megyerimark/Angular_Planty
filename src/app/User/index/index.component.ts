import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantserviceService } from '../service/plantservice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{



  constructor(private plantservic:PlantserviceService,
    private router:Router,
    private formBuilder: FormBuilder){}

    ngOnInit(): void {
       this.plantindex();
      this.plantForm = this.formBuilder.group({
        plant_id :[],
    
   
      })
  

     }
     plantForm!:FormGroup;
     plant_id!: number;
     plants!:any;


    
     plantindex(){
      let jsonUserData: any = localStorage.getItem('currentUser');
      let currentUser = JSON.parse(jsonUserData);
      this.plantservic.index(currentUser.token).subscribe({
        next:res=>{
          this.plants = res;
          console.log(this.plants);
  
        
        }
      });
    }

    addplant(){
      let jsonUserData: any = localStorage.getItem('currentUser');
      let currentUser = JSON.parse(jsonUserData);
      let plant_id =
     this.plantForm.value.plant_id;
    

      this.plantservic.addPlants(plant_id, currentUser.token).subscribe({
        next: res => {
          console.log(res);
          this.plantindex();
        }

      })
  

    }
  
}
