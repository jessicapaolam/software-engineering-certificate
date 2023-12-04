import { Component, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  email: string;
  name: string;
}

@Component({
  selector: 'app-new-certificate',
  templateUrl: './new-certificate.component.html',
  styleUrls: ['./new-certificate.component.css'],
})
export class NewCertificateComponent {
  form: FormGroup

  constructor(
    public dialogRef: MatDialogRef<NewCertificateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      name: '',
      email: ''
   })
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save() {
     if (this.form.value) {
      const { name, email } = this.form.value
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      this.dialogRef.close(this.form.value);
     }
  }

}
