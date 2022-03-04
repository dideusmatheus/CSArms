import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // 7A- ORGANIZANDO AS ROTAS
    //7A- fazer a rota ao acessar o site
    path: '', //7B- quando o usuario acessar o site sem nenhuma rota definida ele vai acessar a pagina home
    pathMatch: 'full', //7C- tira os espaços de quando o usuario for acessar o site com o link
    redirectTo: 'home', //7D-  acessar sem nenhum rota ira diretamente para a Home
  },
  {
    //8A- CONFIGURANDO A ROTA HOME
    //8A- agora configure o home
    path: 'home',  //8B- crie a rota home 
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), //8C- cria uma função no momento que o usuario acesser a rota, o angular executa a função 
    //para requisitar o modulo somente quando o usuario acessar a rota
    //8D- configurar as rotas no home
  },
  {
    //17A- configurando a rota armas, depois vai para armas-routing
    path: 'armas',
    loadChildren: () => import('./armas/armas.module').then((m) => m.ArmasModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
