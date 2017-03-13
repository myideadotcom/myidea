import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from '../home/home.component'
import { LoginComponent } from '../login/login.component'
import {RegisterComponent} from "../register/register.component";
import {IdeasListComponent} from "../ideas-list/ideas-list.component";
import {AddIdeaComponent} from "../add-idea/add-idea.component";
import {SingleIdeaComponent} from "../single-idea/single-idea.component";
import {ProfileComponent} from "../profile/profile.component";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ideas', component: IdeasListComponent },
  { path: 'add-idea', component: AddIdeaComponent },
  { path: 'idea/:id', component: SingleIdeaComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule {}
