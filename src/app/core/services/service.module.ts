import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorService } from './error.service';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { TicketService } from "./ticket.service";
import {UserService} from "./user.service";
import {UtilsService} from "./utils.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    ErrorService,
    TicketService,
    UtilsService,
    UserService
  ],
  declarations: []
})

export class ServiceModule { }
