import { Component, OnInit, inject, signal } from '@angular/core';
import { Curso } from '../../models/curso.model';
import { TarjetaCurso } from '../../components/tarjeta-curso/tarjeta-curso';
import { CursosApi } from '../../services/cursos-api'; // GET

@Component({
  selector: 'app-catalogo',
  imports: [TarjetaCurso],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {

  private api = inject(CursosApi); // NEW DE ANGULAR, Instanciado de objetos

  cursos = signal<Curso[]>([]); // Vacío, que se llena cuando llega la respuesta de la API, como una señal
  // Dicha signal se usa para actualizar la vista
  cargando = signal(false); // Se pone como true cuando finaliza la carga
  error = signal(''); // Para recibir los status

  inscritos: number[] = [];

  busqueda = '';

  ngOnInit(): void {
    this.cargar();

  }

  cargar(): void {
    this.cargando.set(true); //Empieza la espera
    this.error.set(''); //Limpia el error anterior

    this.api.obtenerCursos().subscribe({
      next: (lista) => {
        this.cursos.set(lista), //Cuando llega la lista de cursos, se actualiza la señal
          this.cargando.set(false); //Damos fin a la espera
      },
      error: () => {
        this.error.set('No se pudieron cargar los cursos, intenta de nuevo');
        this.cargando.set(false);

      },

    });
  }

  cursosFiltrados(): Curso[] {
    const texto = this.busqueda.toLowerCase();

    return this.cursos().filter((curso) => curso.nombre.toLowerCase().includes(texto));
  }


  alBuscar(texto: string): void {
    this.busqueda = texto; // Guardar lo que escribió al usuario
  }


  estaInscrito(id: number): boolean {
    return this.inscritos.includes(id); // El id si existe en la lista de inscritos

  }

  alInscribir(curso: Curso): void {
    this.inscritos = [...this.inscritos, curso.id]; // Nueva lista, agregando el nuevo elemento a la misma
  }

  alCancelar(curso: Curso): void {
    this.inscritos = [...this.inscritos.filter((id) => id != curso.id)] // Nueva lista pero sin el id que canceló
  }
}
