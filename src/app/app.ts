import { Component, DOCUMENT, Inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  public elem: any;
  public constructor() {
    this.elem = document.documentElement;
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
      console.log("Geral FullScreen")
    } else if (this.elem.mozRequestFullScreen) {
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      this.elem.webkitRequestFullscreen();
      console.log("entrei em modo FullScreen")
    } else if (this.elem.msRequestFullscreen) {
      this.elem.msRequestFullscreen();
    }
  }

  ngOnInit(): void {
    
  }
}
