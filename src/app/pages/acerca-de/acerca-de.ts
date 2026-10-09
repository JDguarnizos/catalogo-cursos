import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  imports: [RouterLink],
  templateUrl: './acerca-de.html',
  styleUrl: './acerca-de.css',
})
export class AcercaDe {
  clics = 0;
  
  sumarClic(): void {
    this.clics = this.clics + 1;
  }
}
