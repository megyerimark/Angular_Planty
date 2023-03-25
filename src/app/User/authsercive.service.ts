import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserciveService {



  host = 'http://localhost:8000/api/';

  
  constructor( private http:HttpClient) { }



  //belépés


  login(email: string, password: string ){
    let data = {
      email: email,
      password:password
    }
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      "Accept":'application/json'
    });

    let httpOption = {
      headers:headers
    };
    let endpoint  = "login";
    let url = this.host+ endpoint;
    return this.http.post<any>(url,data,httpOption);
  }


  register(name:string, email:string, password:string, confirm_password: string){
    let regdata =
    {
      name: name,
      email:email,
      password:password,
      confirm_password:confirm_password
    }

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOption= {
      headers:httpHeaders
    }
    let endpoint = "register";
    let url = this.host  + endpoint;
    return this.http.post<any>(url,regdata,httpOption)
  }



  logout(email:string, token:string){
    let data = {
      name:email,
      token:token
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    let httpOption = {
      headers:headers
    };
    let endpoint = "logout";
    let url = this.host + endpoint;
    return this.http.post<any>(url, data, httpOption);
  }
}