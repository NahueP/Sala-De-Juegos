import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMemotestComponent } from './listado-memotest/listado-memotest.component';

import { ListadoPptComponent } from './listado-ppt/listado-ppt.component';
import { ListadoQuinceComponent } from './listado-quince/listado-quince.component';
import { ListadoTatetiComponent } from './listado-tateti/listado-tateti.component';

const routes: Routes = [
    
  {path: 'listado-tateti', component:ListadoTatetiComponent}, 
  {path: 'listado-ppt', component:ListadoPptComponent},
  {path: 'listado-memotest', component:ListadoMemotestComponent}, 
  {path: 'listado-quince', component:ListadoQuinceComponent},  
  {path: '', redirectTo:'listado-tateti', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadosRoutingModule { }
