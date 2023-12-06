import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  date: string;
  about: string;
}

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      title: '',
      date: '',
      about: ''
   })
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save() {
     if (this.form.value) {
      const { title, date, about } = this.form.value
      localStorage.setItem('title', title);
      localStorage.setItem('date', date);
      localStorage.setItem('about', about);
      this.dialogRef.close(this.form.value);
     }
  }

}
