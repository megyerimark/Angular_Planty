import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Adminauthsercive } from '../Service/adminauthsercive.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {


  form!:FormGroup;
submitted!: boolean;

constructor(
  private auth: Adminauthsercive,
  private formBuilder: FormBuilder,
  private router: Router,
  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    });
    }

    alogin(){
      let email = this.form.value.email;
      let password = this.form.value.password;

      this.auth.alogin(email,password).subscribe({
        next:res =>{
          if(res.success){
            localStorage.setItem('currentAdmin',
             JSON.stringify({token: res.data.token, name: res.data.name}));
            this.router.navigate(['admin/index']);
            this.toastr.success('Sikeres belépés')

          }else{
            this.toastr.error("sikertelen belépés");
          }
        }
      });
    }

    logout(){
      this.auth.logout();
      this.toastr.success('Sikeres kijelentkezés');
      this.router.navigate(['admin/login']);


    }
}
