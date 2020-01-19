import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistserviceService {

  constructor(private http:HttpClient) { }

  public registerArtist(artist)
  {
    console.log(artist);
      return this.http.post("http://localhost:9090/artistslist",artist);
  }
  public loginArtist(artist)
  {

    console.log("Inside angular app");
    console.log(artist);
      return this.http.post<Artist[]>("http://localhost:9090/Alogin",artist);
 

      }      }