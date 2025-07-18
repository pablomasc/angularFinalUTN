import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiget } from '../services/apiget';
import { imagenInterface } from '../services/apiget';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-foto-detalle',
  imports: [RouterLink],
  templateUrl: './foto-detalle.html',
  styleUrl: './foto-detalle.css'
})
export class FotoDetalle {

  idFoto: string = ''
  listaImagen!: imagenInterface;

  constructor(private route: ActivatedRoute) {
    this.idFoto = this.route.snapshot.params['id']
    
  }

  
    

  cargandoEstado: Boolean = true;

  
  // Metodo para descargar archivo URL

  descargarArchivo() {
    window.open(this.listaImagen.links.download, '_blank');
  }


  private apiget = inject(Apiget)

  ngOnInit() {
    
    let observable = this.apiget.traerxId(this.idFoto)
    observable.subscribe(
    {
      next: (listaImagenesRespuesta) => {
        
        this.cargandoEstado = false

        this.listaImagen = listaImagenesRespuesta

        console.log(listaImagenesRespuesta)

      },
      error: (error) => {
        this.cargandoEstado = false
        alert("Error al cargar imagenes." + error)
        console.error(error)
      }
      
    })
  }

}
