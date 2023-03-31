import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantserviceService {
  [x: string]: any;
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
    return this.http.get<any>(this.host+"plants", httpOption);

  };



store(token:string,
  name:string, imgpath:string,  description:any,watering:any,light_requirement:any,humidity:any,heat_demand:any,
  temperature:any

     ){

  let data = {
    name : name,
    imgpath :imgpath,
    description:description,
    temperature:temperature,
    watering:watering,
    light_requirement:light_requirement,
    humidity:humidity,
    heat_demand:heat_demand

  };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    let httpOption= {
      headers:headers
    }
    let endpoint = "plant";
    let url = this.host  + endpoint;
    return this.http.post<any>(url, data, httpOption)

  }

}
