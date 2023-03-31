import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Adminauthsercive {

  host ="http://localhost:8000/api/";

  constructor( private http:HttpClient) { }


  alogin(email: string, password: string ){
    let data = {
      email: email,
      password:password
    }
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint  = "adminLog";
    let url = this.host+ endpoint;
    return this.http.post<any>(url,data,httpOptions);
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
    let endpoint = "adminReg";
    let url = this.host  + endpoint;
    return this.http.post<any>(url,regdata,httpOption)
  }



  logout(){
    if(localStorage.getItem('currentAdmin') === null){
      return;
    }
    let data:any = localStorage.getItem('currentAdmin');
    localStorage.removeItem('currentAdmin');
    let currentUser = JSON.parse(data);
    let token = currentUser.token;
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');

    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'logoutAdmin';
    let url = this.host + endpoint;
    return this.http.post<any>(url, httpOptions);
}

isLoggedIn(){
  if(localStorage.getItem('currentAdmin') === null){
    return false;
  }
  let data:any = localStorage.getItem('currentAdmin');
  let userData = JSON.parse(data);
  let token = userData.token;
  return token;
}
}
