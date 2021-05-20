import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadosRoutingModule } from './listados-routing.module';
import { ListadoTatetiComponent } from './listado-tateti/listado-tateti.component';
import { ListadoPptComponent } from './listado-ppt/listado-ppt.component';
import { ListadoMemotestComponent } from './listado-memotest/listado-memotest.component';
import { ListadoQuinceComponent } from './listado-quince/listado-quince.component';


@NgModule({
  declarations: [
    ListadoTatetiComponent,
    ListadoPptComponent,
    ListadoMemotestComponent,
    ListadoQuinceComponent
  ],
  imports: [
    CommonModule,
    ListadosRoutingModule
  ]
})
export class ListadosModule { }
