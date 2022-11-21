import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/models/user";
// import {UserService} from "../../core/services/user.service";
// import {User} from "../../core/models/user";

@Component({
  selector: 'app-partners',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})

export class SpeakersComponent {
  form: FormGroup | any;
  speakers: User[] | any;

  constructor(
    private userService: UserService,
  ) {
    this.speakers = this.userService.findAllSpeakers();
  }

  getpicturePath(tempPicturePath:any): string {
    console.log(tempPicturePath)
    return tempPicturePath;
  }

}
