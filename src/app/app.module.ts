import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { AdminregisterComponent } from './Admin/adminregister/adminregister.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminindexComponent } from './Admin/adminindex/adminindex.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './User/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminregisterComponent,
    AdminloginComponent,
    AdminindexComponent,
    HomeComponent,
    IndexComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
