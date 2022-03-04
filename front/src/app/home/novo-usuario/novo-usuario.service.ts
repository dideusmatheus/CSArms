import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  //27A- pra fazer a interação com o back deve-se instanciar o http
  constructor(private http: HttpClient) { }

  // 27B- crie o metodo de cadastrar novo usuario e depois va para hom.module
  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post('http://localhost:3000/user/signup', novoUsuario)
  }

  //31D- metodo para verificar se o usuario existe, depois será criado um serviço para esse metodo em usuario-existe.service-ts
  verificaUsuarioExistente(nomeUsuario: string){
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }


}
