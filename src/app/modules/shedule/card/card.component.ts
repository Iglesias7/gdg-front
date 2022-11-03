import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() description1: any;
  @Input() description2: any;
  @Input() description3: any;
  @Input() height: any;
  @Input() heure: any;
  @Input() showHead: any;

  constructor() {}

}
