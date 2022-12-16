import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/models/user";
import {ActivatedRoute} from "@angular/router";
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
  title: any;
  description: any;
  description1: any;
  description2: any;
  path:any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
    this.route.url.subscribe(values=>{
      this.path = values[0].path;
    });

    if (this.path === "teams") {
      this.title = "Teams";
      this.description = "The amazing team of Organisers.";
      this.speakers = this.userService.findAllTeams();
    } else {
      this.title = "Speakers";
      this.description = "Hear from the Googlers, Partners, and Guest Speakers who are building the future of ";
      this.description1 = "cloud. Check back often as we add more speakers, including our customers and";
      this.description2 = "partners.";
      this.speakers = this.userService.findAllSpeakers();
    }
  }

  getpicturePath(tempPicturePath:any): string {
    return tempPicturePath;
  }

}
