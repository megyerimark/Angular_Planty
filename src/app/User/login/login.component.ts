import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserciveService } from '../authsercive.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

form!:FormGroup;
submitted!: boolean;

constructor(
  private auth: AuthserciveService,
  private formBuilder: FormBuilder,
  private router: Router,
  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    });
    }

    login(){
      const email = this.form.value.email;
      const password = this.form.value.password;

      this.auth.login(email,password).subscribe({
        next:data =>{
          if(data.success){
            localStorage.setItem('currentUser', JSON.stringify({token: data.data.token, name: data.data.name}));
            // this.router.navigate(['user/index']);
            this.toastr.success('Sikeres belépés')
          }else{
            this.toastr.error("sikertelen belépés");
          }
        }
      });
    }

}
