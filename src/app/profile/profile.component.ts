import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {ProfilesService} from "../model/profiles.service";
import {Profile} from "../model/Profile";
import {AngularFire} from "angularfire2";
import { FirebaseApp } from 'angularfire2';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profile: Profile;
  uid: string;
  storage: any;
  picture: File;
  angularFireSubscription : Subscription;

  constructor(@Inject(FirebaseApp) firebaseApp: any, private profileService: ProfilesService, private af: AngularFire) {
    this.storage = firebaseApp.storage();
  }

  ngOnInit(): void {
    this.angularFireSubscription = this.af.auth.subscribe(auth => this.uid = auth.uid);
    this.profileService.getUserByUserId(this.uid).subscribe(
      result => {
        this.profile = result;
      }
    );
  }

  ngOnDestroy(): void {
    this.angularFireSubscription.unsubscribe();
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
