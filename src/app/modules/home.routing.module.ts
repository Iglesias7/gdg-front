import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AddTicketComponent} from "./tickets/add-ticket/add-ticket.component";
import {SheduleComponent} from "./shedule/shedule.component";
import {LoginComponent} from "./login/login.component";
import {DetailsCardComponent} from "./shedule/card/details-card/details-card.component";
import {AddSpeakerComponent} from "./speakers/add-speaker/add-speaker.component";
import {SpeakersComponent} from "./speakers/speakers.component";
import {PartnersComponent} from "./partners/partners.component";
import {DetailsSpeakersComponent} from "./speakers/details-speakers/details-speakers.component";


const routes: Routes = [
  { path: '', component: HomeComponent , data: { title: 'PAGE_TITLES.HOME' }},
  { path: 'home', component: HomeComponent , data: { title: 'PAGE_TITLES.TABLEAU_DE_BORD' }},
  { path: 'add-ticket', component: AddTicketComponent , data: { title: 'PAGE_TITLES.ADD_TICKET' }},
  { path: 'add-speaker', component: AddSpeakerComponent , data: { title: 'PAGE_TITLES.ADD_TICKET' }},
  { path: 'shedules', component: SheduleComponent , data: { title: 'PAGE_TITLES.SHEDULES' }},
  { path: 'speakers', component: SpeakersComponent , data: { title: 'PAGE_TITLES.SPEAKERS' }},
  { path: 'teams', component: SpeakersComponent , data: { title: 'PAGE_TITLES.TEAMS' }},
  { path: 'partners', component: PartnersComponent , data: { title: 'PAGE_TITLES.PARTNERS' }},
  { path: 'login', component: LoginComponent , data: { title: 'PAGE_TITLES.LOGIN' }},
  { path: 'shedule/:id', component: DetailsCardComponent , data: { title: 'PAGE_TITLES.DETAILS_SHEDULE' } },
  { path: 'speakers/:id', component: DetailsSpeakersComponent , data: { title: 'PAGE_TITLES.DETAILS_SPEAKERS' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
