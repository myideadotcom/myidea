import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {ProfilesService} from "../model/profiles.service";
import {Profile} from "../model/Profile";
import {AngularFire} from "angularfire2";
import { FirebaseApp } from 'angularfire2';
import {Subscription} from "rxjs";
import {profile} from '../home/home.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profile : Profile;
  uid: string;
  storage: any;

  angularFireSubscription : Subscription;

  constructor(@Inject(FirebaseApp) firebaseApp: any, private profileService: ProfilesService, private af: AngularFire) {
    this.storage = firebaseApp.storage();
  }

  ngOnInit(): void {
    this.angularFireSubscription = this.af.auth.subscribe(auth => this.uid = auth.uid);
    this.profile = profile;

  }

  ngOnDestroy(): void {
    this.angularFireSubscription.unsubscribe();
  }


}
