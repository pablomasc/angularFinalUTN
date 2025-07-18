import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface imagenInterface {
    id: string,
    created_at: string,
    updated_at: string,
    width: string,
    height: string,
    color: string,
    blur_hash: string,
    likes: number,
    liked_by_user: boolean,
    description: string,
    user: {
      id: string,
      username: string,
      name: string,
      portfolio_url: string,
      bio: string,
      location: string,
      total_likes: number,
      total_photos: number,
      total_collections: number,
      instagram_username: string,
      twitter_username: string,
      profile_image: {
        small: string,
        medium: string,
        large: string
      },
      links: {
        self: string,
        html: string,
        photos: string,
        likes: string,
        portfolio: string
      }
    },
    current_user_collections: [ 
      {
        id: number,
        title: string,
        published_at: string,
        last_collected_at: string,
        updated_at: string,
        cover_photo: null,
        user: null
      },
    ],
    urls: {
      raw: string,
      full: string,
      regular: string,
      small: string,
      thumb: string
    },
    links: {
      self: string,
      html: string,
      download: string,
      download_location: string
    }
}

@Injectable({
  providedIn: 'root'
})
export class Apiget {

  private URLAPI = 'https://api.unsplash.com/search/photos?page=1&query=argentina&per_page=6&orientation=landscape';
  private URLID = 'https://api.unsplash.com/photos/'

  idFoto : string = ''
  busqueda : string = ''

  constructor(private http: HttpClient) { }

  traerFotos (nroPagina : number) : Observable<imagenInterface[]> {
    // Definir headers para API
    const headers = new HttpHeaders({
      'Authorization': 'Client-ID dtHfRxeOEHWyjewt5BIa8gRe_a0iHSdawapjU5Ot4H8',
      'Content-Type': 'application/json',
    });

    // Agregar Pagina

    this.URLAPI = 'https://api.unsplash.com/search/photos?page=' + nroPagina + '&query=argentina&per_page=6&orientation=landscape';

    // Consultar API
    return this.http.get<any>(this.URLAPI, { headers });
  }
  

  traerxId (idFoto : string) : Observable<any> {

    this.busqueda = this.URLID + idFoto

    console.log("buscar id:", this.busqueda)

    // Definir headers para API
    const headers = new HttpHeaders({
      'Authorization': 'Client-ID dtHfRxeOEHWyjewt5BIa8gRe_a0iHSdawapjU5Ot4H8',
      'Content-Type': 'application/json',
    });
    // Consultar API
    return this.http.get<any>(this.busqueda, { headers });
  }

}
