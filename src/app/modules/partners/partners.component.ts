import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/models/user";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})

export class PartnersComponent {
  form: FormGroup | any;
  partners: User[] | any;

  constructor(
    private userService: UserService,
  ) {
    this.partners = this.userService.findAllPartners();
  }

  getpicturePath(tempPicturePath:any): string {
    console.log(tempPicturePath)
    return tempPicturePath;
  }
}
