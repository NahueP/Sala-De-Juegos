import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { ChatComponent } from './components/chat/chat.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'quiensoy', component: QuiensoyComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'juegos', loadChildren: () => import('./components/juegos/juegos.module').then(m => m.JuegosModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
