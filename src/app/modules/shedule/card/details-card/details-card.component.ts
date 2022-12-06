import { Component } from '@angular/core';
import {Card} from "../../../../core/models/card";
import {UserService} from "../../../../core/services/user.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})

export class DetailsCardComponent {
  cards: Card[] | any;
  id = parseInt(this.route.snapshot.params.id);

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
    this.cards = this.userService.findAllCards();
  }

  get card() {
    return this.cards[this.id]
  }

}
