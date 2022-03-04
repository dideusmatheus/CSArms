import { ListaArmasComponent } from './lista-armas/lista-armas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //18A- adicionar a rota de armas, depois alterar o component para retirecionar para a lista de animais caso o login tenha dado certo, vá para login.component
    path: '',
    component: ListaArmasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmasRoutingModule { }
