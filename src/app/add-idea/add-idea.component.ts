import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent  {

  form: FormGroup;
  ideas: FirebaseListObservable<any>;

  constructor(private fb:FormBuilder, private af: AngularFire, private router: Router) {
    this.form = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required]
    });
    this.ideas = this.af.database.list('ideas');

  }

  addIdea(){
    this.ideas.push({
      title: this.form.value.title,
      description: this.form.value.description
    });
    this.router.navigateByUrl('/home');
  }
}
