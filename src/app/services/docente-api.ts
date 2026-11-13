// ARCHIVO: docentes-api.ts · servicio que consume una API EXTERNA (en internet): JSONPlaceholder.
// Misma idea que CursosApi, pero ahora la URL apunta a OTRO servidor.

import { HttpClient } from '@angular/common/http'; // cliente HTTP de Angular
import { Injectable, inject } from '@angular/core'; // servicio + inyección de dependencias
import { Observable } from 'rxjs'; // tipo de lo que devuelve HttpClient
import { Docente } from '../models/docente.model'; // forma de cada docente

@Injectable({ providedIn: 'root' }) // una sola copia del servicio para toda la app
export class DocentesApi {
    private http = inject(HttpClient); // pedimos el HttpClient a Angular

    // URL completa (con https://) porque es un servidor externo, distinto al de nuestra app.
    private url = 'https://jsonplaceholder.typicode.com/users';

    obtenerDocentes(): Observable<Docente[]> {
        return this.http.get<Docente[]>(this.url); //El get es de la API externa y la respuesta del json es la lista de los docentes
    }
}