import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-aluno-formulario',
  styleUrl: './aluno-formulario.css',
  templateUrl: './aluno-formulario.html',
})
export class AlunoFormulario {
  // Propriedades
  formularioAluno = input.required<FormGroup>();
  visibilidadeBotoes = input<boolean>(true);
  // Funções
  aoCadastrar = output();
  aoAlterar = output();
  aoRemover = output();
  aoCancelar = output();
}