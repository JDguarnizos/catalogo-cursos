import { Component, input, output } from '@angular/core';
import { Curso } from '../../models/curso.model';

@Component({
  imports: [],
  selector: 'app-tarjeta-curso',
  styleUrl: './tarjeta-curso.css',
  templateUrl: './tarjeta-curso.html',
})
export class TarjetaCurso {

  curso = input.required<Curso>(); // Leer
  inscrito = input(false);

  inscribir = output<Curso>(); // Aviso
  cancelar = output<Curso>();

  alPresionarInscribir(): void{ //El hijo no va a cambiar la lista, solo le avisa al padre
    this.inscribir.emit(this.curso());
  }

  alPresionarCancelar(): void{
    this.cancelar.emit(this.curso());
  }

}
