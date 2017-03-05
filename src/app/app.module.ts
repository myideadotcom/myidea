import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddIdeaComponent } from './add-idea/add-idea.component';
import { LoginComponent } from './login/login.component';
import { SingleIdeaComponent } from './single-idea/single-idea.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { ProfileComponent } from './profile/profile.component';
import {AppRouteModule} from "./app-route/app-route.module";
import {AuthService} from "./security/auth.service";
import {IdeasService} from "./model/ideas.service";
import {ProfilesService} from "./model/profiles.service";

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AddIdeaComponent,
    LoginComponent,
    SingleIdeaComponent,
    IdeasListComponent,
    ProfileComponent,
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
  providers: [AuthService, IdeasService, ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
