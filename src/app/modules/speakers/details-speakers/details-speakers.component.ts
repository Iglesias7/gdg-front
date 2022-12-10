import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-details-speakers',
  templateUrl: './details-speakers.component.html',
  styleUrls: ['./details-speakers.component.scss']
})

export class DetailsSpeakersComponent {
  speakers: any[];
  newCards: any[] = [];
  cards: any[];
  id = parseInt(this.route.snapshot.params.id);

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
    this.speakers = this.userService.findAllSpeakers();
    this.cards = this.userService.findAllCards();

    this.cards.forEach(card => {
      card.users.forEach((u: { firstname: any; }) => {
        if(u.firstname === this.speaker.firstname) {
          this.newCards.push(card);
        }
      });
    });
  }

  get speaker() : any {
    return this.speakers[this.id-1]
  }
}
