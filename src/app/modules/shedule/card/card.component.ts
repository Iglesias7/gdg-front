import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() description: any;
  @Input() background = 'skyblue';
  @Input() height: any;
  @Input() showHead: any;
  @Input() isTrackOne: any;
  @Input() isTrackTwo: any;
  @Input() isTrackTree: any;
  @Input() card: any;

  constructor() {
    console.log(this.background)
  }

}
