import { Component, OnInit, Inject } from '@angular/core';
import {ProfilesService} from "../model/profiles.service";
import {Profile} from "../model/Profile";
import {AngularFire} from "angularfire2";
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

  profile: Profile;
  uid: string;
  storage: any;
  picture: File;

  constructor(@Inject(FirebaseApp) firebaseApp: any, private profileService: ProfilesService, private af: AngularFire) {
    this.af.auth.subscribe(auth => this.uid = auth.uid);
    this.profileService.getUserByUserId(this.uid).subscribe(
      result => {
        this.profile = result;
      }
    );
    this.storage = firebaseApp.storage()
  }


  onChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.picture = files[0];
    console.log(this.picture);
    this.storage.ref().child('avatar.png').put(this.picture);
  }
}
