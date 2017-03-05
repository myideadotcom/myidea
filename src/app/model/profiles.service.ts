import {Injectable, Inject} from '@angular/core';
import {AngularFire, AngularFireDatabase, FirebaseRef} from "angularfire2";
import {Observable} from "rxjs";
import {Profile} from "./Profile";


@Injectable()
export class ProfilesService {


  constructor(private db: AngularFireDatabase) {

  }


  getUserByUserId(userId:string): Observable<Profile>{
    console.log('User Id '+userId+ ' i sprawdzenie danych');
    return this.db.list('profiles',{
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    }).first().do(console.log).map(result => Profile.parseFromJson(result[0]));
  }
}
