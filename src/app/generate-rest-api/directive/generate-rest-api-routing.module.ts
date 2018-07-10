import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { SummaryComponent } from '../components/summary/summary.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ProfileComponent } from '../components/profile/profile.component';
import { HomeComponent } from '../components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, },
  { path: 'registration', component: RegistrationComponent },
  { path: 'summary', component: SummaryComponent, },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class GenerateRestApiRoutingModule { }
