import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Idea} from "./Idea";
import {Observable} from "rxjs";

@Injectable()
export class IdeasService {

  constructor(private af:AngularFire) { }

  getIdeaById(id:string): Observable<Idea>{
    return this.af.database.object('ideas/'+id).map(Idea.parseFromJson);
  }

  getAllIdeas(): Observable<Idea[]>{
    return this.af.database.list('ideas').map(Idea.parseFromArray);
  }
}
