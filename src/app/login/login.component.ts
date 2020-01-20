import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistserviceService } from '../artistservice.service';
import {Router} from '@angular/router'
import { Session, Key } from 'protractor';
import { userInfo } from 'os';
import { currentId } from 'async_hooks';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   artist:Artist=new Artist("","","",0,"","",0,"",0,"","",0,"");
   
   
   
  //  artistEmail:string
  //  artistPassword:string;
 message:any;



   constructor(private service:ArtistserviceService,private router :Router) { }
 

  ngOnInit() {
  }

 
 
  public loginNow()
  {
    
    let resp=this.service.loginArtist(this.artist);
    resp.subscribe(data=>{
      this.message=data;
      console.log(data);
     sessionStorage.setItem("artistemail",data)
      if(this.message==="login failed")
      {
         this.router.navigate(["/artistreg"])
      }
      else{
        this.router.navigate(["/welcomeartist"])
      }
    });
  }
}
