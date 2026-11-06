import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Curso } from '../models/curso.model';

@Service()
export class CursosApi {
    private http = inject(HttpClient);

    obtenerCursos(): Observable<Curso[]>{
        return this.http.get<Curso[]>('api/cursos.json');
    }

}

