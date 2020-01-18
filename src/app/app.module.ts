import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ArtistRegComponent } from './artist-reg/artist-reg.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ArtistserviceService } from './artistservice.service';
import {HttpClientModule} from '@angular/common/http';
import { ArtistloginComponent } from './artistlogin/artistlogin.component';



@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent,
    ArtistRegComponent,
    HomepageComponent,
    PagenotfoundComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    ArtistloginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ArtistserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
