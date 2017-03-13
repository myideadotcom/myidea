import {Component, OnInit, Inject} from '@angular/core';
import {FirebaseApp, AngularFire} from "angularfire2";
import {ProfilesService} from "../model/profiles.service";
import {profile} from '../home/home.component';
import {StorageService} from "../model/storage.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  storage: any;

  constructor(@Inject(FirebaseApp) firebaseApp: any, private profileService: ProfilesService, private af: AngularFire,
              private sf : StorageService) {
    this.storage = firebaseApp.storage();
  }

  ngOnInit() {
  }

  onChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.sf.addAvatar(profile.userId, files[0]);

  }
}
