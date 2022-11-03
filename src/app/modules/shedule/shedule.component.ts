import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss']
})

export class SheduleComponent {
 show1 = true;
 show2 = false;

  constructor() {}

  showOne() {
    this.show1 = true;
    this.show2 = false;
  }

  showTwo() {
    this.show2 = true;
    this.show1 = false;
  }

}
