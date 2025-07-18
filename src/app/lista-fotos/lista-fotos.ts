import { Component, inject } from '@angular/core';
import { FotoIndividual } from '../foto-individual/foto-individual';
import { imagenInterface, Apiget } from '../services/apiget';


@Component({
  selector: 'app-lista-fotos',
  imports: [FotoIndividual],
  templateUrl: './lista-fotos.html',
  styleUrl: './lista-fotos.css'
})
export class ListaFotos {

  // Estados carga de fotos
  respuestaArray : any = []
  listaImagenes : imagenInterface[] = []
  cargandoEstado : boolean = true

  // Estados paginador
  paginaActual : number = 1
  paginasTotales : number = 50


  // Servicio
  private apiget = inject(Apiget)


  // Pagina Siguiente

  paginaSiguiente(){
    this.paginaActual = this.paginaActual + 1
    this.traerPagina(this.paginaActual)
  }

  // Pagina Anterior
  paginaAnterior(){
    this.paginaActual = this.paginaActual - 1
    this.traerPagina(this.paginaActual)
  }

  // Pagina Random SUERTE
    paginaSuerte(){
    this.paginaActual = Math.floor(Math.random() * (this.paginasTotales - 1 + 1)) + 1;
    this.traerPagina(this.paginaActual)
  }


  traerPagina(nroPagina: number) {

    let observable = this.apiget.traerFotos(this.paginaActual)
    observable.subscribe(
    {
      next: (listaImagenesRespuesta) => {
        

        // estados lista de fotos
        this.cargandoEstado = false
        this.respuestaArray = listaImagenesRespuesta
        this.listaImagenes = this.respuestaArray.results

        // Seteo maximo paginador

        // La devolución de la API anda mal. Por alguna razón marca más páginas de las que hay.
        // this.paginasTotales = this.respuestaArray.total_pages

        // Hardcodeo de max paginas totales
        this.paginasTotales = 15

      },
      error: (error) => {
        this.cargandoEstado = false
        alert("Error al cargar imagenes." + error)
      }
      
    })    

  }

  ngOnInit() {

   this.paginaActual = 1
    this.traerPagina(this.paginaActual)

  }

}
