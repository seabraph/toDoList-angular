import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';
import * as uniqid from 'uniqid'

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})

export class TarefaComponent implements OnInit {

  @Input() tarefa!:Tarefa;

  constructor(){  }

  ngOnInit(): void {
  }

}