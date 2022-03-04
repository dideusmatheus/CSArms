import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';

import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule
    //15H- importando o modulo, depois vai par alogin.component
    //3A- era pra ser importado o HomeModule
    //6A- tirar o HomeModule e importar ele na Rota (app-routing.module.ts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
