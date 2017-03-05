import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Comment} from "./Comment";

@Injectable()
export class CommentsService {

  constructor(private af: AngularFire) { }

  getIdeaComments(ideaId : string): Observable<Comment[]> {
    return this.af.database.list('comments', {
      query: {
        orderByChild: 'ideaId',
        equalTo: ideaId
      }
    }).map(Comment.parseFromArray);
  }

}
