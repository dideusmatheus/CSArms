import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //34C- depois criar um atributo e instancia-lo
  private usuarioSubsject = new BehaviorSubject<Usuario>({});

  // 34A- invejar o serviço de token
  constructor(private tokenService: TokenService) {
    //34F- verificar se o usuario ja tem token no localstorage
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  //34B- criar esse metodo para pegar o token e decodificar o token
  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubsject.next(usuario);
  }

  //34D- metodo para retornar o subsject
  retornaUsuario() {
    return this.usuarioSubsject.asObservable();
  }

  //34E- metodo para salvar o token
  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  //34G- metodo para limpar o token 
  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubsject.next({});
  }

  // 34H- metodo pra ve ser ta logado, dpeois ir para autenticacao.service.ts
  estaLogado() {
    return this.tokenService.possuiToken();
  }

}
