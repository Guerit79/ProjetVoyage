import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from '../../shared/models/travel';




@Injectable({
  providedIn: 'root'
})
export class TravelWebService {
  url: string;

  constructor(private http:HttpClient ) {
    this.url = "http://localhost:8080/api/voyages/"
   }

   findAllTravels(): Observable<Travel[]>{
    console.log("lancement findAllTravels")
    return this.http.get<Travel[]>(this.url + 'findAllTravels');
    }

    findTravelByIdRegion(id: any): Observable<Travel[]> {
      return this.http.get<Travel[]>(this.url + `findByRegionId/${id}`);
    }

    getLikes(): Observable<number> {
      return this.http.get<number>(this.url);
    }

    updateLikes(compteurLike: number): Observable<void> {
      return this.http.put<void>(this.url, compteurLike);
    }
}
