import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../list-certificate/list-certificate.component';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent implements AfterViewInit {
  @ViewChild('canvasRef') canvasRef!: ElementRef<HTMLCanvasElement>;

  private canvas!: HTMLCanvasElement;

  name?: any;

  constructor(
    public dialogRef: MatDialogRef<CertificateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.canvasConfig();
  }

  private canvasConfig() {
    const ctx2d = this.canvas.getContext('2d');
    if (ctx2d) {
      const imgBg = new Image();
      imgBg.src = 'software-engineering-certificate/assets/img/certificate.jpeg';
      imgBg.onload = () => {
        console.log(imgBg.complete)
        ctx2d.drawImage(imgBg, 0, 0, this.canvas.width, this.canvas.height);
        ctx2d.font = '25px Arial';
        ctx2d.fillStyle = '#200d00';
        ctx2d.fillText('CERTIFICADO', 170, 100);

        ctx2d.font = '15px Arial';
        ctx2d.fillStyle = '#311401';
        ctx2d.fillText('DE PARTICIPAÇAO', 190, 120);

        ctx2d.font = '15px Arial';
        ctx2d.fillStyle = 'black';
        ctx2d.fillText(this.data.name, 230, 190);

        ctx2d.font = '15px Arial';
        ctx2d.fillStyle = '#200d00';
        ctx2d.fillText('___________________________', 140, 200);

        ctx2d.font = '10px Arial';
        ctx2d.fillStyle = '#311401';
        ctx2d.fillText('Certificado de participação do evento Cadeia Alimentar', 120, 250);

        ctx2d.font = '10px Arial';
        ctx2d.fillStyle = '#311401';
        ctx2d.fillText('realizado em 28/11/2023', 180, 270);

        ctx2d.font = '10px Arial';
        ctx2d.fillStyle = '#311401';
        ctx2d.fillText('contabilizando carga horária total de 10 horas.', 140, 290);
      }



    }
  }

  download() {
    const anchor = document.createElement('a');
    anchor.href = this.canvas.toDataURL();
    anchor.download = 'Certificado.png';
    anchor.click();
  }
}
