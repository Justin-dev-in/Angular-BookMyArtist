import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';

@Component({
  selector: 'artist-reg',
  templateUrl: './artist-reg.component.html',
  styleUrls: ['./artist-reg.component.css']
})
export class ArtistRegComponent implements OnInit {

artist:Artist=new Artist("","","",0,"","",0,"",0,"","",0,"")

  constructor() { }

  ngOnInit() {
  }

}
