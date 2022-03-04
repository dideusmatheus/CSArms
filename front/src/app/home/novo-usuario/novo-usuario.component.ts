import { Router } from '@angular/router';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  //28A- crie essa variavel
  novoUsuarioForm!: FormGroup;

  //28B- depois coloque o formBuilder e o novousuario
  constructor(private formBuilder: FormBuilder, private novoUsuarioService: NovoUsuarioService, private usuarioExistenteService: UsuarioExisteService, private router: Router) { }

  //28C - construir essa parte
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      //30A- fazer as validações (ate agora do email e do fullname) depois voltar para o novo-usuario.component.html e utilizar o app-mensagem
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required,Validators.minLength(4)]],
      //31B- utilizando a condição customizada, voltei para o template (novo-usuario-component.html)
      //31G- utilizar a condição usuario ja existe, voltei no template e faz a chamada da condição
      userName: ['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
      password: [''],
    },
      {
        //31J- usar a validação aqui e depois mostrar no template
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  //28D- depois crie o metodo cadastrar
  //31J- fazer as condições a baixo, depois vamos utilizar o token jwt criando o token.service.ts
  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } 
  }

}
