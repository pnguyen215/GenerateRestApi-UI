import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import  { SignupService } from './generate-rest-api/service/signup.service';
import { AppComponent } from './app.component';
import { GenerateRestApiRoutingModule } from './generate-rest-api/generate-rest-api-routing.module';
import { GenerateRestApiModule } from './generate-rest-api/generate-rest-api.module';
import { LoginComponent } from './generate-rest-api/component/login/login.component';
import { RegistrationComponent } from './generate-rest-api/component/registration/registration.component';
import { NavbarComponent } from './generate-rest-api/component/navbar/navbar.component';
import { SummaryComponent } from './generate-rest-api/component/summary/summary.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    GenerateRestApiRoutingModule,
    GenerateRestApiModule,
    HttpClientModule,
    
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
