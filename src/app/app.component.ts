import {Component, OnInit} from '@angular/core';
import {AuthInfo} from "./security/auth-info";
import {AuthService} from "./security/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authInfo: AuthInfo;
  activeButton : number = 1;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.authInfo$.subscribe(authInfo => this.authInfo = authInfo);
  }

  logout(){
    this.authService.logout();
  }

  setActiveButton(buttonNumber : number) {
    this.activeButton = buttonNumber;
  }

}
