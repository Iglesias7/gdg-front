import {Component, Input} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/models/user";
import {Card} from "../../core/models/card";

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss']
})

export class SheduleComponent {
 show1 = true;
 show2 = false;
  allCards: Card[] | any;
  cards: Card[] | any;
  cards1: Card[] | any;
  cardsright1: any[] | any;
  cardsright2: any[] | any;
  cardsright3: any[] | any;
  cardsright4: any[] | any;
  cardsright5: any[] | any;
  cardsright6: any[] | any;
  cardsright7: any[] | any;
  cardsright8: any[] | any;
  cardsright9: any[] | any;
  cardsright10: any[] | any;
  hours: any[] | any;
  @Input() height: any;

  constructor(
    private userService: UserService,
  ) {
    this.allCards = this.userService.findAllCards();
    this.cards = this.userService.findAllCards().slice(0,3);
    this.cards1 = this.userService.findAllCards().slice(3,7);
    this.cardsright1 = this.userService.findAllCards().slice(8,10);
    this.cardsright2 = this.userService.findAllCards().slice(10,12);
    this.cardsright3 = this.userService.findAllCards().slice(12,14);
    this.cardsright4 = this.userService.findAllCards().slice(17,22);
    this.cardsright5 = this.userService.findAllCards().slice(23,25);
    this.cardsright6 = this.userService.findAllCards().slice(26,28);
    this.cardsright7 = this.userService.findAllCards().slice(28,31);
    this.cardsright8 = this.userService.findAllCards().slice(31,33);
    this.cardsright9 = this.userService.findAllCards().slice(34,36);
    this.cardsright10 = this.userService.findAllCards().slice(37,39);
    this.hours = this.userService.findAllHours();
  }

  showOne() {
    this.show1 = true;
    this.show2 = false;
  }

  showTwo() {
    this.show2 = true;
    this.show1 = false;
  }

  getpicturePath(tempPicturePath:any): string {
    return tempPicturePath;
  }

  getCard(index:any): string {
    return this.allCards[index];
  }
}
