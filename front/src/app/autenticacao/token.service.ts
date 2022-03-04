import { Injectable } from '@angular/core';
//32A- criar umas constante global, pra ser a chave do localstorage
const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  //32B- criar metodo para o token, primeiro retorna token
  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  //32B- metodo para salvar o token
  salvaToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  //32B- metodo para excluir o token
  excluiToken() {
    localStorage.removeItem(KEY);
  }

  //32B- metodo para verificar se tem ou nao o token guardado, depois foi criado o autenticação do usuario (1 a interface)
  possuiToken() {
    return !! this.retornaToken();
  }

}
