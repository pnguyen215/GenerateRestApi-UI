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
import { AuthGuard } from './generate-rest-api/auth/guards/auth.guard';
import { PaginationComponent } from './generate-rest-api/components/pagination/pagination.component';
import { PagerService } from './generate-rest-api/service/pager.service';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { DashboardDetailsComponent } from './generate-rest-api/components/dashboard-details/dashboard-details.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';



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
    PaginationComponent,
    DashboardDetailsComponent,
  ],
  imports: [
    BrowserModule,
    GenerateRestApiRoutingModule,
    GenerateRestApiModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [HttpClient, HttpModule, SignupService, AuthService, AlertService, AuthGuard, PagerService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
