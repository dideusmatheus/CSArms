import { MensagemComponent } from './mensagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ MensagemComponent ],
  imports: [CommonModule],
  //19D- exporta o component mensagem e depois importar ele no home.module
  exports: [MensagemComponent]
})
export class MensagemModule { }
