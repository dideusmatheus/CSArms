import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // 15E- criando as variaveis
  usuario = '';
  senha = '';

  // 16A- instacia o objeto authService, e com ele podemos usar o metodo login
  //1B- para que o usuario apos logado seja direcionado para a pagina X, deve-se instanciar o Router
  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }


  // 15F- fazer a funcao login
  //15G- importar o modulo httpclient em app.module
  login() {
    //16B- chama no constutor o authService e chamar a função criada nele, depois de chamar a funcao e passar seu parametros voce adiciona o metodo subscribe
    //16B- que momento que a requisição for completada ela sera retornada nesse metodo, dentro dele temos dois parametros de  saidas... a 1º e o momento de sucesso e a 2º o erro
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next:() => {
        //16C- sucesso
        //16C- caso o usuario logue, sera direcionado para a pagina de armas
        this.router.navigate(['armas']);
        // 18B- fazer alinha de comando a cima, feito isso foi criado o component mensagem
        console.log('AUTENTICADO COM SUCESSO!!!!!!');
      },
        //16C- erro, depois criar o modulo de armas e ir para app-routing
       error: (err) => {
          alert('Usuário ou senha inválidos!!')
        }
    })    
  }





}
