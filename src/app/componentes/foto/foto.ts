import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import html2canvas from 'html2canvas';
import { FotoDTO } from '../../model/FotoDTO';
import { FotoResponse } from '../../model/FotoResponse';
import { Servicespictures } from '../../servicespictures';

@Component({
  selector: 'app-foto',
  standalone: false,
  styleUrl: './foto.css',
  templateUrl: './foto.html',
})
export class Foto implements OnInit {
  public loading: boolean = false;
  public fotoDTO: FotoDTO = new FotoDTO();
  public width: number = 720;
  public height: number = 1200;

  public videoOptions: MediaTrackConstraints = {
    width: { ideal: 1280 },
    height: { ideal: 720 }
  };

  constructor(
    private service: Servicespictures,
    private cdr: ChangeDetectorRef   
  ) {
    this.onResize();
  }

  ngOnInit(): void {}

  public onResize(event?: Event): void {
    const win = event ? (event.target as Window) : window;
    this.videoOptions.width = win.innerWidth;
    this.videoOptions.height = win.innerHeight;
  }

  public capturarFoto(): void {
    this.loading = true;
    this.cdr.detectChanges(); 

    const wrapper = document.querySelector('#wrapper');
    if (!wrapper) {
      this.loading = false;
      this.cdr.detectChanges();
      console.warn('Elemento #wrapper não encontrado');
      return;
    }

    html2canvas(wrapper as HTMLElement)
      .then(canvas => {
        const base64Str = canvas.toDataURL('image/png');
        this.fotoDTO.fotoBase64 = base64Str;
        this.fotoDTO.uuid = 'f0543cd3-5546-421a-a6d1-f1b2d6764470';

        this.service.enviarFoto(this.fotoDTO).subscribe({
          next: (res: FotoResponse) => {
            this.loading = false;
            this.cdr.detectChanges(); 
            console.log('Sucesso:', res);
          },
          error: (err: any) => {
            this.loading = false;
            this.cdr.detectChanges(); 
            console.error('Erro no envio:', err);
          }
        });
      })
      .catch(err => {
        this.loading = false;
        this.cdr.detectChanges();
        console.error('Erro na captura:', err);
      });
  }
}
