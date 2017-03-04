import { Injectable } from '@angular/core';
import {FirebaseAuth, FirebaseAuthState, FirebaseDatabase, AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable, Subject, BehaviorSubject} from "rxjs";
import { AuthInfo } from './auth-info';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  static UNKNOWN_USER = new AuthInfo(null);
  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);
  uuid: string;

  constructor(private auth: FirebaseAuth, private router: Router, private af: AngularFire) {
  }

  login(email, password): Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(this.auth.login({email, password}));
  }

  signUp(email, password): Observable<FirebaseAuthState> {
    return this.fromFirebaseAuthPromise(this.auth.createUser({email, password}));
  }

  fromFirebaseAuthPromise(promise): Observable<any> {
    const subject = new Subject<any>();
    promise
      .then(res => {
          // this.af.auth.subscribe(auth => this.uuid = auth.uid);

          //   const authInfo = new AuthInfo(this.uuid);
          const authInfo = new AuthInfo(this.auth.getAuth().uid);
          this.authInfo$.next(authInfo);

          subject.next(res);
          subject.complete();
        },
        err => {
          this.authInfo$.error(err);
          subject.error(err);
          subject.complete();
        });

    return subject.asObservable();
  }

  logout() {
    this.auth.logout();
    this.authInfo$.next(AuthService.UNKNOWN_USER);
    this.router.navigateByUrl('/home');
  }
}
