import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from './generate-rest-api/service/signup.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './generate-rest-api/components/login/login.component';
import { RegistrationComponent } from './generate-rest-api/components/registration/registration.component';
import { NavbarComponent } from './generate-rest-api/components/navbar/navbar.component';
import { SummaryComponent } from './generate-rest-api/components/summary/summary.component';
import { GenerateRestApiRoutingModule } from './generate-rest-api/directive/generate-rest-api-routing.module';
import { GenerateRestApiModule } from './generate-rest-api/directive/generate-rest-api.module';
import { HomeComponent } from './generate-rest-api/components/home/home.component';
import { ProfileComponent } from './generate-rest-api/components/profile/profile.component';
import { AuthService } from './generate-rest-api/service/auth.service';
import { AlertComponent } from './generate-rest-api/components/alert/alert.component';
import { AlertService } from './generate-rest-api/service/alert.service';
import { FaderComponent } from './generate-rest-api/components/fader/fader.component';
import { AuthGuard } from './generate-rest-api/auth/guards/auth.guard';
import { PaginationComponent } from './generate-rest-api/components/pagination/pagination.component';
import { PagerService } from './generate-rest-api/service/pager.service';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    SummaryComponent,
    HomeComponent,
    ProfileComponent,
    AlertComponent,
    FaderComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    GenerateRestApiRoutingModule,
    GenerateRestApiModule,
    HttpClientModule,
    FormsModule,
    HttpModule, 
    
  ],
  providers: [HttpClient, HttpModule, SignupService, AuthService, AlertService, AuthGuard, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
