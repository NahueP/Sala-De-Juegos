import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';
import { TatetiComponent } from './tateti/tateti.component';
import { CeldaComponent } from './tateti/celda/celda.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { MemotestComponent } from './memotest/memotest.component';
import { CronometroComponent } from './memotest/cronometro/cronometro.component';
import { TableroComponent } from './memotest/tablero/tablero.component';
import { TarjetaComponent } from './memotest/tarjeta/tarjeta.component';

 import { TableroService } from './memotest/servicios/tablero.service';
 import { TarjetaService } from './memotest/servicios/tarjeta.service';
import { QuinceComponent } from './quince/quince.component';
import { BoardComponent } from './quince/board/board.component';
import { StateComponent } from './quince/state/state.component';
import { TileComponent } from './quince/tile/tile.component';




@NgModule({
  declarations: [
    JuegosComponent,
    TatetiComponent,
    CeldaComponent,
    PiedraPapelTijeraComponent,
    MemotestComponent,
    CronometroComponent,
    TableroComponent,
    TarjetaComponent,
    QuinceComponent,
    BoardComponent,
    StateComponent,
    TileComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    
    
    
  ],
  providers:
  [
    TarjetaService,
    TableroService
  ]
  
})
export class JuegosModule { }
