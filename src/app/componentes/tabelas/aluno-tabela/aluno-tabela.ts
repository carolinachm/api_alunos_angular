import { Component, input, output } from '@angular/core';
import { Aluno } from '../../../model/aluno/aluno';

@Component({
  imports: [],
  selector: 'app-aluno-tabela',
  styleUrl: './aluno-tabela.css',
  templateUrl: './aluno-tabela.html',
})
export class AlunoTabela {
  // Recebe a lista de alunos como um Signal de leitura
  alunos = input.required<Aluno[]>();
  // Método do componente pai que pede uma informação numérica
  aoSelecionar = output<number>();
  // Método da classe para interagir com o método do componente pai
  selecionarAluno(indice: number) {
    this.aoSelecionar.emit(indice);
  }

 
}