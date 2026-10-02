import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// Plantillas para datos
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  titulo = "Catálogo de Cursos";
  institucion = "Fundación Universitaria UCompensar";
  horaCarga = new Date ();
}
