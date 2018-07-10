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
  ],
  imports: [
    BrowserModule,
    GenerateRestApiRoutingModule,
    GenerateRestApiModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [SignupService, AuthService, AlertService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
