import { Routes } from '@angular/router';
import { ListaFotos } from './lista-fotos/lista-fotos';
import { FotoDetalle } from './foto-detalle/foto-detalle';
import { FormContacto } from './form-contacto/form-contacto';

export const routes: Routes = [
    { 
        path: '',
        component: ListaFotos
    },
    { 
        path: 'detalle/:id',
        component: FotoDetalle
    },
    { 
        path: 'contacto',
        component: FormContacto
    }
]
;
