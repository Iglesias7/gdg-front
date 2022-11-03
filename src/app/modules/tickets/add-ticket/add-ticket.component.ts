import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {TicketService} from "../../../core/services/ticket.service";
import {UtilsService} from "../../../core/services/utils.service";
import {ActivatedRoute, Router} from "@angular/router";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})

export class AddTicketComponent {
  form: FormGroup | any;

  constructor(
      private formBuilder: FormBuilder,
      private ticketService: TicketService,
      private utilsService: UtilsService,
      private route: ActivatedRoute,
      private router: Router
  ) {
    this.createFormGroup();
  }

  private createFormGroup() {
    this.form = this.formBuilder.group({
      firstName: [
        null, Validators.required
      ],
      lastName: [
        null, Validators.required
      ],
      email: [
        null, Validators.required
      ]
    });
  }

  public update() {
    const data = this.form.value;
    console.log(data);
    this.ticketService.create(data).subscribe(() => {
      this.utilsService.snackBarSuccess(`Vous vous êtes enregistré avec succès.`);
      this.form.reset();
      this.router.navigate(['/shedules']);
    });
  }
}
