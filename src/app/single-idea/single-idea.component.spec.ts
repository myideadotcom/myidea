/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SingleIdeaComponent } from './single-idea.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {IdeasService} from "../model/ideas.service";
import {AngularFire, FirebaseUrl, AuthMethods, AuthProviders, AngularFireModule, FirebaseAuth} from "angularfire2";
import {CommentsService} from "../model/comments.service";
import {HttpModule} from "@angular/http";
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {AppRouteModule} from "../app-route/app-route.module";
import {AppComponent} from "../app.component";
import {HomeComponent} from "../home/home.component";
import {RegisterComponent} from "../register/register.component";
import {AddIdeaComponent} from "../add-idea/add-idea.component";
import {LoginComponent} from "../login/login.component";
import {ProfileComponent} from "../profile/profile.component";
import {IdeasListComponent} from "../ideas-list/ideas-list.component";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";
import {AuthService} from "../security/auth.service";
import {ProfilesService} from "../model/profiles.service";
import {StorageService} from "../model/storage.service";
import {APP_BASE_HREF} from "@angular/common";

var config = {
  apiKey: "AIzaSyBqMBdbnw8z3SEm6UYFVmC_xpZkHUXqtqU",
  authDomain: "myidea-c9d2b.firebaseapp.com",
  databaseURL: "https://myidea-c9d2b.firebaseio.com",
  storageBucket: "myidea-c9d2b.appspot.com",
  messagingSenderId: "1012947482588"
};

export const authConfig = {
  provder: AuthProviders.Password,
  method: AuthMethods.Password
}

describe('SingleIdeaComponent', () => {
  let component: SingleIdeaComponent;
  let fixture: ComponentFixture<SingleIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        AddIdeaComponent,
        LoginComponent,
        SingleIdeaComponent,
        IdeasListComponent,
        ProfileComponent,
        EditProfileComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BootstrapModule,
        ReactiveFormsModule,
        AppRouteModule,
        AngularFireModule.initializeApp(config, authConfig)
      ],
      providers: [AuthService, IdeasService, ProfilesService, CommentsService,
        StorageService, { provide: APP_BASE_HREF, useValue: '/' }, { provide: FirebaseAuth, useValue: null }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
   // Firebase app = new FirebaseUrl('')
    fixture = TestBed.createComponent(SingleIdeaComponent);
    console.log('he');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
