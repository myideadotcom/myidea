import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {IdeasService} from "../model/ideas.service";
import {Idea} from "../model/Idea";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfilesService} from "../model/profiles.service";
import {profile} from "../home/home.component"
import {CommentsService} from "../model/comments.service";
import {Comment} from "../model/Comment";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-single-idea',
  templateUrl: './single-idea.component.html',
  styleUrls: ['./single-idea.component.css']
})
export class SingleIdeaComponent implements OnDestroy, OnInit {
  id: string;
  idea: Idea;
  comments: FirebaseListObservable<any>;
  commentForm: FormGroup;
  profile: ProfilesService;
  existingComments : Comment[];
  routeSubscriber : Subscription;
  commentsSubscriber : Subscription;
  ideasSubscriber : Subscription;

  constructor(private ideasServices: IdeasService, private route: ActivatedRoute, private router: Router,
              private af: AngularFire,
              private fb: FormBuilder,
              private cs : CommentsService) {
  }

  ngOnDestroy(): void {
    this.routeSubscriber.unsubscribe();
    this.ideasSubscriber.unsubscribe();
    this.commentsSubscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.routeSubscriber = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    console.log('To id: '+this.id);
    this.ideasSubscriber = this.ideasServices.getIdeaById(this.id).subscribe(
      idea => this.idea = idea
    );
    this.comments = this.af.database.list('comments');
    this.commentsSubscriber = this.cs.getIdeaComments(this.id).subscribe(result => this.existingComments = result);
    this.commentForm = this.fb.group({
      comment: ['',Validators.required]
    });
  }

  addComment() {
    var he = this.comments.push({
        comment: this.commentForm.value.comment,
        username: profile.email,
        ideaId: this.id
    });
    this.commentForm.reset();
    alert(' Comment submitted ');
  }
}
