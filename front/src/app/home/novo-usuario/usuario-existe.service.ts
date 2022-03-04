import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  //31E- injetar o serviço no construtor
  constructor(private novoUsuarioService: NovoUsuarioService) { }

  //31F- criar o metodo de validação, depois v oltei para o novo-usuarii.component.ts
  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          (usuarioExiste ? { usuarioExistente: true } : null)
        ),
        first()
      );
    };
  }
}
