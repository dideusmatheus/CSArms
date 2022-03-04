import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent{

  //36B- guardar o usuario em um atributo observable utlizando o $ como convenção da classe 
  user$ = this.usuarioService.retornaUsuario();

  //36A- chamar o usuarioService
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  //36C- metodo logout para aparecer no header, depois volte para o template cabecalho.html
  logout(){
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

  

}
