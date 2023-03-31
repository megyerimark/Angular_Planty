import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantserviceService {
 
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



store(plant:any, token:string ){


    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    let httpOption= {
      headers:headers
    }
    let endpoint = "plant";
    let url = this.host + endpoint;

    return this.http.post<any>(url, plant, httpOption)

  }

}
