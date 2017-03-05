import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {IdeasService} from "../model/ideas.service";
import {Idea} from "../model/Idea";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfilesService} from "../model/profiles.service";
import {profile} from "../home/home.component"

@Component({
  selector: 'app-single-idea',
  templateUrl: './single-idea.component.html',
  styleUrls: ['./single-idea.component.css']
})
export class SingleIdeaComponent {

  id: string;
  idea: Idea;
  comments: FirebaseListObservable<any>;
  commentForm: FormGroup;
  profile: ProfilesService

  constructor(private ideasServices: IdeasService, private route: ActivatedRoute, private router: Router,
              private af: AngularFire,
              private fb: FormBuilder,
              private profileService: ProfilesService) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
    })

    this.ideasServices.getIdeaById(this.id).subscribe(
      idea => this.idea = idea
    );
    if(this.idea == null){
      console.log('null');
    }else{
      console.log(this.idea);
    }
    this.comments = this.af.database.list('comments');
    this.commentForm = this.fb.group({
      comment: ['',Validators.required]
    });
  }

  addComment() {
    var he = this.comments.push({
        comment: this.commentForm.value.comment,
        username: profile.email
    });
    this.commentForm.reset();
    alert('Comment submitted');
  }
}
