import { Component } from '@angular/core';
import { Curso } from '../../models/curso.model';
import { CURSOS } from '../../data/curso.data';
import { TarjetaCurso } from '../../components/tarjeta-curso/tarjeta-curso';

@Component({
  selector: 'app-catalogo',
  imports: [TarjetaCurso],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  // Datos (estado del padre) de la clase catálogo
  cursos: Curso[] = CURSOS;

  inscritos: number[] = [];

  busqueda = '';

  cursosFiltrados(): Curso[]{
    const texto = this.busqueda.toLowerCase();
    return this.cursos.filter((curso) => curso.nombre.toLowerCase().includes(texto));
  }

  alBuscar (texto:string): void {
    this.busqueda = texto;
  }

  estaInscrito(id: number): boolean {
    return this.inscritos.includes(id);
  }

  alInscribir(curso: Curso): void {
    this.inscritos = [...this.inscritos, curso.id];
  }

  alCancelar(curso: Curso): void{
    this.inscritos = this.inscritos.filter((id) => id !== curso.id);
  }
}
