import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/auth.interceptor';
import { ServiceModule } from './services/service.module';
import { CoreRoutingModule } from './core.routing.module';
import {WidgetModule} from "./widgets/widget.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CoreRoutingModule,
    ServiceModule,
    WidgetModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})
export class CoreModule { }
