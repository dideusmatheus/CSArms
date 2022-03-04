import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmasRoutingModule } from './armas-routing.module';
import { ListaArmasComponent } from './lista-armas/lista-armas.component';


@NgModule({
  declarations: [
    ListaArmasComponent,
  ],
  imports: [
    CommonModule,
    ArmasRoutingModule
  ]
})
export class ArmasModule { }
