import {Component, OnInit, OnDestroy} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {IdeasService} from "../model/ideas.service";
import {Idea} from "../model/Idea";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.css']
})
export class IdeasListComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ideas : Idea[];
  subscription : Subscription;

  constructor(private is: IdeasService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.subscription = this.is.getAllIdeas().subscribe(
      ideas => this.ideas = ideas
    )
  }

  ideaDetails(idea:Idea){
    console.log("wejscie");
    this.router.navigate(['idea',idea.$key]);

  }

}
