import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Location } from '@angular/common';
import {MatSidenav} from "@angular/material/sidenav";
import {MatDialog} from "@angular/material/dialog";

const activatedMenuItems = {
  'home': ['home'],
  'shedules': ['shedules'],
  'add-ticket': ['add-ticket']
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() inputSideNav: MatSidenav | any;
  currentUrl = '';
  public showAppMenu = false;

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private dialog: MatDialog,
    private location: Location
  ) {
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  changeShowAppMenu(event: { preventDefault: () => void; }): void {
    event.preventDefault();
    this.showAppMenu = !this.showAppMenu;
  }

  goBack(event: { preventDefault: () => void; }): void {
    event.preventDefault();
    this.location.back();
  }

  isActiveItemMenu(itemMenu: string): boolean {
    // @ts-ignore
    const routes = activatedMenuItems[itemMenu];
    return routes.filter((route: any) => this.currentUrl.startsWith(route)).length > 0;
  }
}
