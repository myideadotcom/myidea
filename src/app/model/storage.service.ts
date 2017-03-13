import {Injectable, Inject} from '@angular/core';
import {ProfilesService} from "./profiles.service";
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class StorageService {

  storage : any;

 constructor(@Inject(FirebaseApp) firebaseApp: any) {
   this.storage = firebaseApp.storage();
 }

 getAvatar(userId : string) {
  // return this.storage.ref().child(userId).
 }

 addAvatar(userId : string, picture : File) {
   this.storage.ref().child(userId).put(picture);
 }
}
