import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})

export class SmallCardComponent {
  @Input() color: any;
  @Input() userName: any;
  @Input() firstName: any;
  @Input() description: any;
  @Input() height: any;
  @Input() showHead: any;

  constructor() {}

}
