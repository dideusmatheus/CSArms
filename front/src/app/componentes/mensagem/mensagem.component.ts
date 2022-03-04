import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  //19C- o input será usado para informar ao component externo a mensagem... quando ele for usado será criado um atributo chamado mensagem para passar a mensagem para o 
  //19C- component e para isso deve-se export o component (mensagem.module.ts)
  @Input()
  //19B- cria a variavel mensagem
  mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
