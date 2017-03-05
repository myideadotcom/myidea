import { Component, OnInit } from '@angular/core';
import {ProfilesService} from "../model/profiles.service";
import {Profile} from "../model/Profile";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

  profile: Profile;
  uid: string;

  constructor(private profileService: ProfilesService, private af: AngularFire) {
    this.af.auth.subscribe(auth => this.uid = auth.uid);
    this.profileService.getUserByUserId(this.uid).subscribe(
      result => {
        this.profile = result;
      }
    );
  }
}
