import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantserviceService {

  host = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  index(token: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    return this.http.get<any>(this.host + "plants", httpOption);

  };





  store(token: string, formData: FormData) {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    let httpOptions = {
      headers: headers
    }
    let endpoint = "plant";
    let url = this.host + endpoint;
    return this.http.post<any>(url, formData, httpOptions);
  }
}




