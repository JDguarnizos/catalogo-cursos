import { HttpClient, HttpParams, HttpResponse, } from '@angular/common/http';
import { Service, inject, ɵgetInjectableDef } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje, NuevoMensaje } from '../models/mensaje.model';


@Service()
export class MensajeApi {
    private http = inject(HttpClient); // Pedir el Http a angular

    private url = 'https://jsonplaceholder.typicode.com/posts' //Direccion API externa

    obtenerMensajes (idDocente: number): Observable<Mensaje[]>{
        const parametros = new HttpParams().set('userId', idDocente);
        return this.http.get <Mensaje[]>(this.url, {params: parametros});
    }

    obtenerMensaje (id: number): Observable<Mensaje>{
        return this.http.get<Mensaje>(`$(this.url)/$(id)`);
    }

    // Post
    enviarMensaje(nuevo: NuevoMensaje): Observable<HttpResponse<Mensaje>>{
        return this.http.post<Mensaje>(this.url, nuevo, { observe: 'response'}); // Devuelve la respuesta completa codigo + el cuerpo
    }

    
}
