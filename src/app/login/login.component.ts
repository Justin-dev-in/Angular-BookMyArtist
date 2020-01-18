import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistserviceService } from '../artistservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   artist:Artist=new Artist("","","",0,"","",0,"",0,"","",0,"");
 message:any;

   constructor(private service:ArtistserviceService) { }
 

  ngOnInit() {
  }

 
 
  public loginNow()
  {
    this.service.loginArtist().subscribe((data)=>this.message="login successful");
   
  }
}
