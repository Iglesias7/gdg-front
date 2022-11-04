import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { WidgetModule } from 'src/app/core/widgets/widget.module';
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
import {SmallComponent} from "./shedule/small/small.component";
import {DetailsCardComponent} from "./shedule/card/details-card/details-card.component";
import {SmallCardComponent} from "./shedule/card/small-card/small-card.component";
import {FirstComponent} from "./shedule/first/first.component";
import {SecondComponent} from "./shedule/second/second.component";
import {AddSpeakerComponent} from "./speakers/add-speaker/add-speaker.component";
import {SpeakersComponent} from "./speakers/speakers.component";

@NgModule({
  declarations: [
    HomeComponent,
    AddTicketComponent,
    SheduleComponent,
    LoginComponent,
    CardComponent,
    SmallComponent,
    DetailsCardComponent,
    SmallCardComponent,
    FirstComponent,
    SecondComponent,
    AddSpeakerComponent,
    SpeakersComponent
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
