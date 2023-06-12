import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Card } from '../models/card.interface';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private urlBaseApi: string = 'https://api.unsplash.com/';
  constructor(private http: HttpClient) {}

  getAllList(): Observable<Card[]> {
    const urlLlamada =
      this.urlBaseApi +
      'search/photos?query=coffee&per_page=20&client_id=MKqfP-otkBNjJyY-ak97BU7oQpOBIZoVOsbXIzSBg3s';
    return this.http.get<Card[]>(urlLlamada).pipe(
      map((resp: any) => {
        return resp.results.map((x: any) => {
          return {
            id: x.id,
            fechaCreacion: x.created_at,
            description:
              x.description == '' ? 'No existe descripción' : x.description,
            imageUrl: x.urls.small,
            title: x.user.name,
          };
        });
      })
    );
  }

  getPhotoById(id: string): Observable<Card> {
    const urlLlamada =
      this.urlBaseApi +
      '/photos/' +
      id +
      '?client_id=MKqfP-otkBNjJyY-ak97BU7oQpOBIZoVOsbXIzSBg3s';
    return this.http.get<Card>(urlLlamada).pipe(
      map((x: any) => {
        return {
          id: x.id,
          fechaCreacion: x.created_at, // Valor predeterminado o asignar un valor adecuado
          description:
            x.description == '' ? 'No existe descripción' : x.description,
          imageUrl: x.urls.small,
          title: x.user.name,
        };
      })
    );
  }
}
