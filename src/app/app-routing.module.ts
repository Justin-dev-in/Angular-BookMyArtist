import { NgModule, Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { WelcomeArtistComponent } from './welcome-artist/welcome-artist.component';
import { ArtistRegComponent } from './artist-reg/artist-reg.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';


const routes: Route[]  = [

   {path:'homepage',component:HomepageComponent},
    {path:'welcomeartist',component:WelcomeArtistComponent},
    {path:'artistreg',component:ArtistRegComponent},
    {path:'artistlogin',component:LoginComponent},
 


  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingmodule=[HomepageComponent,WelcomeArtistComponent,ArtistRegComponent,LoginComponent]