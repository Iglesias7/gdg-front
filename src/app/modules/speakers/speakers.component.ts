import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/models/user";

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})

export class SpeakersComponent {
  form: FormGroup | any;
  speakers: User[] | any;

  constructor(
    private userService: UserService
  ) {
    this.userService.findAll().subscribe(datas => {
      console.log(datas)
      this.speakers = datas;
    })
  }

}
