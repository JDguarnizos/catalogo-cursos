import { Component, OnInit, inject, signal } from '@angular/core';
import { Docente } from '../../models/docente.model'
import { DocentesApi } from '../../services/docente-api';

@Component({
  imports: [],
  selector: 'app-docentes',
  styleUrl: './docentes.css',
  templateUrl: './docentes.html',
})
export class Docentes {

  private api = inject(DocentesApi);

  docentes = signal<Docente[]>([]);
  cargando = signal(false); 
  error = signal('');

    ngOnInit(): void{
      this.cargar();
    }

  cargar(): void {
    this,this.cargando.set(true);
    this.error.set('');
    this.api.obtenerDocentes().subscribe({
      next: (lista) =>{
        this.docentes.set(lista);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(' No se pudo conectar con la API, revisa tu conexión');
        this.cargando.set(false);
      }
    })
  }
  
}
