import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistserviceService {

  constructor(private http:HttpClient) { }

  public registerArtist(artist)
  {
      return this.http
  }
}
