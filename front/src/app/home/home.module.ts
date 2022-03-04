

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // para fazer a validação do login

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule ,//14A- importar esse modulo para tratar o formulario (formulario do tipo template)
    MensagemModule, //19E - importando o mensagemmodule, e depois vao ate login.html
    ReactiveFormsModule //27C- importar esse modeulo e depois vai para novo-usuario.component.ts
  ],
  // 2A- EXPORTANDO O COMPONENTE HOME
  // 2A- exportar o HomeComponent
  exports: [HomeComponent]
})
export class HomeModule { }
