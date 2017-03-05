import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {AuthService} from "../security/auth.service";
import {Router} from "@angular/router";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form:FormGroup;
  profiles: FirebaseListObservable<any>;
  uid: string;



  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router, private af: AngularFire) {
    this.form = this.fb.group({
      email:['',Validators.required],
      password: ['', Validators.required],
      firstName:['',Validators.required],
      secondName:['',Validators.required],
      indexNumber:['',Validators.required]
    });
    this.profiles = this.af.database.list('profiles');
  }

  signUp() {
    const val = this.form.value;
    this.authService.signUp(val.email,val.password).
    subscribe(
      () => {
        alert('User created successfully');
        this.af.auth.subscribe(auth => this.uid = auth.uid);
        this.router.navigateByUrl('/home');
        this.profiles.push({
          userId: this.uid,
          description: 'default',
          avatarUrl: 'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
          email: val.email
        });
      },
      err => alert (err)
    );
  }
}
