import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../generate-rest-api/component/login/login.component';
import { RegistrationComponent } from '../generate-rest-api/component/registration/registration.component';
import { SummaryComponent } from '../generate-rest-api/component/summary/summary.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'summary', component: SummaryComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]

})
export class GenerateRestApiRoutingModule { }
