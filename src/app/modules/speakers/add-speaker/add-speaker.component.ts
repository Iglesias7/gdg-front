import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {UtilsService} from "../../../core/services/utils.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.scss']
})

export class AddSpeakerComponent {
  form: FormGroup | any;
  private tempPicturePath: string | any;
  private tempPicturePathVideo: string | undefined;
  private pictureChanged: boolean | any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createFormGroup();
    this.pictureChanged = false;
  }

  private createFormGroup() {
    this.form = this.formBuilder.group({
      firstname: [
        null, Validators.required
      ],
      username: [
        null, Validators.required
      ],
      email: [
        null, Validators.required
      ],
      city: [
        null, Validators.required
      ],
      country: [
        null, Validators.required
      ],
      company: [
        null, Validators.required
      ],
      companyPosition: [
        null, Validators.required
      ],
      twitter: [
        null, Validators.required
      ],
      linkedln: [
        null, Validators.required
      ],
      github: [
        null, Validators.required
      ]
    });
  }

  get picturePath(): string {
    return this.tempPicturePath && this.tempPicturePath !== '' ? 'http://localhost:8080/'+this.tempPicturePath : 'uploads/unknown-shool.png';
  }

  public fileChange(event: Event) {
    console.log("picture")
    // @ts-ignore
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      this.userService.uploadPicture(file).subscribe(data => {
        // this.cancelTempPicture();
        console.log(data.response)
        this.tempPicturePath = data.response;
        console.log(this.picturePath)
        this.pictureChanged = true;
        this.form.markAsDirty();
      });
    }
  }

  ngOnDestroy(): void {
    this.cancelTempPicture();
  }

  public cancelTempPicture() {
    // const data = this.form.value;
    // if (this.pictureChanged) {
    //   this.userService.cancelPicture(data.name).subscribe();
    // }
  }

  public update() {
    const data = this.form.value;
    data.picturePath = this.tempPicturePath;
    data.role = 1;
    if (this.pictureChanged) {
      // this.userService.confirmPicture(data.name, this.tempPicturePath).subscribe();
      // data.picturePath = this.tempPicturePath;
      this.pictureChanged = false;
    }
    console.log(data);
    this.userService.create(data).subscribe(() => {
      this.utilsService.snackBarSuccess(`Vous avez ajouter un speaker avec succès.`);
      this.form.reset();
      this.router.navigate(['/partners']);
    });
  }
}
