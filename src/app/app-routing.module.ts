import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MentoringComponent } from './mentoring/mentoring.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { MentorComponent } from './mentor/mentor.component';

const routes: Routes = [
  { path: '', redirectTo: '/registrar', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: SignupComponent },
  {
    path: '', component: NavbarComponent, 
    children: [
      { path: 'perfil', component: ProfileComponent },
      { path: 'mentorias', component: MentoringComponent },
      { path: 'mentor/painel', component: MentorComponent }
    ],
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
