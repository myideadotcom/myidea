import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {ProfilesService} from "../model/profiles.service";
import {Profile} from "../model/Profile";

export var profile: Profile;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  af: AngularFire, private pf: ProfilesService) {
    var uid;
    this.af.auth.subscribe(auth => uid = auth.uid);
    if(uid != null) {
      this.pf.getUserByUserId(uid).subscribe(
        result => profile = result
      );
    }
  }

  ngOnInit() {
  }

}
