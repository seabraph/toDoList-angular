import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  tarefas:Tarefa[] = [
    {
      descricao: "Estudar angular",
      finalizada: true,
      prioridade: 1,
      id: "1"
    },
    {
      descricao: "Estudar Java",
      finalizada: false,
      prioridade: 1,
      id: "2"
    },
    {
      descricao: "Jogar cs",
      finalizada: false,
      prioridade: 1,
      id: "3"
    },
    {
      descricao: "Comprar um processador",
      finalizada: false,
      prioridade: 1,
      id: "4"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
