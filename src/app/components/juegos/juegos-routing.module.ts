import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './tateti/tateti.component';
import { MemotestComponent } from './memotest/memotest.component';

const routes: Routes = [
  {path: 'tateti', component: TatetiComponent},
  {path: 'piedra-papel-tijera', component: PiedraPapelTijeraComponent},
  {path: 'memotest', component: MemotestComponent},
  {path: '', component: JuegosComponent},
   
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
