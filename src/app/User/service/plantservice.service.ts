import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlantserviceService  {

  host = 'http://localhost:8000/api/';


  constructor(private http: HttpClient) { }

  index(token:string){
    let headers = new HttpHeaders({
       'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    return this.http.get<any>(this.host, httpOption);
    
  };
  addPlants(token:string, plant_id:any){
 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };

    let endpoint="myplant";
    let url = this.host + endpoint;
    return this.http.post<any>(url,plant_id, httpOption);
  }

   
}
