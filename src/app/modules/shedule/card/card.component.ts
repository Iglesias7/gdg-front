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

  constructor() {}

}
