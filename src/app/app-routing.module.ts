import { NgModule, Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';
import { ArtistRegComponent } from './artist-reg/artist-reg.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Route[]  = [

{path:'',redirectTo:'/homepage',pathMatch:'full'},
{path:'homepage',component:HomepageComponent,

  children:[
    {path:'newuser',component:NewuserComponent},
    {path:'artist-reg',component:ArtistRegComponent}

  ]

},

{path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
