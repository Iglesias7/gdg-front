import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
// import { WidgetModule } from 'src/app/core/widgets/widget.module';
import { ReactiveFormsModule } from '@angular/forms';
import {TimeAgoPipe} from 'time-ago-pipe';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {HomeComponent} from "./home/home.component";
import {NgChartsModule} from "ng2-charts";
import {NgApexchartsModule} from "ng-apexcharts";
import {AddTicketComponent} from "./tickets/add-ticket/add-ticket.component";
import {SheduleComponent} from "./shedule/shedule.component";
import {LoginComponent} from "./login/login.component";
import {CardComponent} from "./shedule/card/card.component";
import {DetailsCardComponent} from "./shedule/card/details-card/details-card.component";
import {AddSpeakerComponent} from "./speakers/add-speaker/add-speaker.component";
import {SpeakersComponent} from "./speakers/speakers.component";
import {PartnersComponent} from "./partners/partners.component";
import {WidgetModule} from "../core/widgets/widget.module";
import {DetailsSpeakersComponent} from "./speakers/details-speakers/details-speakers.component";
// import {MySheduleComponent} from "./shedule/my-shedule/my-shedule.component";
// import {ScheduleDayComponent} from "./shedule/shedule-day/shedule-day.component";

@NgModule({
  declarations: [
    HomeComponent,
    AddTicketComponent,
    SheduleComponent,
    LoginComponent,
    CardComponent,
    DetailsCardComponent,
    AddSpeakerComponent,
    SpeakersComponent,
    PartnersComponent,
    DetailsSpeakersComponent
    // MySheduleComponent,
    // ScheduleDayComponent
  ],
  imports: [
    HomeRoutingModule,
    WidgetModule,
    ReactiveFormsModule,
    AngularEditorModule,
    NgChartsModule,
    NgApexchartsModule
  ],
  exports: [

  ],
  entryComponents: [
    AddTicketComponent
  ],
  providers: [
    // { provide: MatBottomSheet, useValue: {} },
    // { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} }
  ]
})
export class HomeModule { }
