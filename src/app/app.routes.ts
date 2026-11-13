import { Routes } from '@angular/router';
import { Catalogo } from './pages/catalogo/catalogo';
import { AcercaDe } from './pages/acerca-de/acerca-de';
import { Docentes } from './pages/docentes/docentes';


export const routes: Routes = [
    {path: '', component: Catalogo},
    {path: 'acerca-de', component: AcercaDe},
    {path: 'docentes', component: Docentes},
    {path: '**', redirectTo: ''}
];
