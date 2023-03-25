import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserciveService } from '../Service/authsercive.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.scss']
})
export class AdminregisterComponent {

  form!:FormGroup;
  submitted!: boolean;


constructor(
  private auth:AuthserciveService,
  private formBuilder: FormBuilder,
  private router: Router,
  private toastr: ToastrService
)
{}




  ngOnInit() {
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      email: ['', Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
    });

  }

  register(){
    let name = this.form.value.name;
    let email = this.form.value.email;
    let password = this.form.value.password;
    let confirm_password = this.form.value.confirm_password;

    this.auth.register( name, email,password,confirm_password).subscribe({
       next : data =>{
        this.toastr.success("Sikeres regisztráció")
        localStorage.setItem('newAuthData', JSON.stringify(data));
        this.router.navigate(['user/login']);
       },

       error: err => {
        this.toastr.error('Hiba! A regisztráció sikertelen!');
      }

    });

  }

}
