import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { CertificateComponent } from '../certificate/certificate.component';
import { NewCertificateComponent } from '../new-certificate/new-certificate.component';

export interface CertificateData {
  name: string;
  email: string;
  view: string;
}

const CERTIFICATE_DATA: CertificateData[] = [];

export interface DialogData {
  email: string;
  name: string;
}

@Component({
  selector: 'app-list-certificate',
  templateUrl: './list-certificate.component.html',
  styleUrls: ['./list-certificate.component.css']
})

export class ListCertificateComponent implements OnInit {
  public name?: string;
  public email?: string;
  displayedColumns: string[] = ['name', 'email', 'view'];
  dataSource = CERTIFICATE_DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openCertificate() {
    this.dialog.open(CertificateComponent, {
      data: {name: this.name, email: this.email},
    });

  }

  openNewCertificate() {
    const dialogRef = this.dialog.open(NewCertificateComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.name = result.name;
      this.email = result.email;
      this.dataSource.push(result);
      this.dataSource = [...this.dataSource];
    });
  }
}
