import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config, authConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
