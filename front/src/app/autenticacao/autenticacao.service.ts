import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  // url: string = 'http://localhost:3000/user/login';

  //13 - FAZER A AUTENTICAÇÃO DE LOGIN
  //13A- para fazer a autenticação de login, deve-se importar o httpclient
  //35C-  depois coloque no construtur o usuarioService
  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  //13B- criar o metodo de autenticar, passando como parametros o usuario e a senha e retornada uma observable (no momento do tipo any)
  //35A- mudar o observable do tipo any para HttpResponse<any>
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    //13C- chamar o hhtpclient fazendo a requisição post no back-end
    //13D- feito isso, vamos adeguar o componente para enviar as informações para o  serviço criado (importar o modulo no home.module)
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    },
    //35B- depois passa o objeto observe, poruqe o angular vai passar o header e o body completo 
      {observe: 'response'}
     // 35D- depois salve o token no serviço utilizando o pipe, depois sera feito o cabeçado para mostrar se o usuario te logado ou nao
    ).pipe(
      tap((res) =>{
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    )
  }



}
