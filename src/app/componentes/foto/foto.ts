import { Component, OnInit } from '@angular/core';
import { WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-foto',
  standalone: false,
  styleUrl: './foto.css',
  templateUrl: './foto.html',
})
export class Foto implements OnInit{
  
  public altura: number = 1280;
  public largura: number = 720;
  public videoOptions: MediaTrackConstraints = {
    width: {ideal: 1080},
    height: {ideal: 1920}
  }
  ngOnInit(): void {
    
  }
}

