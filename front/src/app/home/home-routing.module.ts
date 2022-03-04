import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //9A- CRIAR AS ROTAS DO COMPONENT HOME
    //9A- as rotas criadas aqui é somente do ponto de vista desse modulo
    path: '',
    component: HomeComponent, //9B- e a primeira rota desse modulo é o componente home
    //9C- feito isso será criado o componente login
    children: [ //12A- criar esse elemetno de subrotas
      //12B- no routeroulet interno desse component, quando for uma rota vazia sera mostrado o login
      //12C- feito isso sera feito a autenticação
      {
        path: '',
        component: LoginComponent,
      },
      {
        //23A- criação da rota para novo usuario e depois criar o formulario no html
        path: 'novousuario',
        component: NovoUsuarioComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
