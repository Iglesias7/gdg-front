import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss']
})

export class SmallComponent {

  @Input() heure: any;
  @Input() description: any;
  @Input() color: any;
  @Input() height: any;

  constructor() {}

}
