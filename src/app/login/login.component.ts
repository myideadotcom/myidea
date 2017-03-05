import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../security/auth.service";
import {Router} from "@angular/router";
import {Profile} from "../model/Profile";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const val = this.form.value;
    this.authService.login(val.email,val.password)
      .subscribe(
        () =>{
          //alert('Logged successfully');
          this.router.navigateByUrl('/home')
        },
        err => alert(err)
      );
  }

}
