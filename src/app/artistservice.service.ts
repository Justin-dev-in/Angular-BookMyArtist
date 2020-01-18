import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Artist }  from './artist';
@Injectable({
  providedIn: 'root'
})
export class ArtistserviceService {

  constructor(private http:HttpClient) { }

  public registerArtist(artist)
  {
      return this.http.post("http://localhost:9090/artistslist",artist);
  }

  // _url='http://localhost:9090/Alogin/rahul@gm.com/12123';

   public loginArtist:Observable<Artist[]>
   {
  
   
    return this._httpService.get("http://localhost:9090/Alogin/",artist).pipe(map(response:Response)=>response.json();
   }
  
}
