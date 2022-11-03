import { Injectable } from '@angular/core';
import { SnackBarComponent } from '../widgets/snack-bar/snack-bar-success.component';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({ providedIn: 'root' })

export class UtilsService {

  constructor(
    private snackBar: MatSnackBar,
  ) {
  }

  public snackBarSuccess(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      panelClass: 'snack-success',
      verticalPosition: 'bottom',
    });
  }

  public snackBarError(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      panelClass: 'snack-error',
      verticalPosition: 'top',
    });
  }

  public snackBarAlert(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      panelClass: 'snack-alert',
      verticalPosition: 'top',
    });
  }

  public snackBarInfo(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      panelClass: 'snack-info',
      verticalPosition: 'top',
    });
  }
}
