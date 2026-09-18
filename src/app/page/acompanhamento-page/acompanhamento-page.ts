import { Component, OnInit, signal } from '@angular/core';
import { AcompanhamentoFormulario } from '../../componentes/formularios/acompanhamento-formulario/acompanhamento-formulario';
import { AcompanhamentoTabela } from '../../componentes/tabelas/acompanhamento-tabela/acompanhamento-tabela';
import { AcompanhamentoServico } from '../../service/acompanhamento/acompanhamento-service';
import { Acompanhamento } from '../../model/acompanhamento/acompanhamento';
import { Aluno } from '../../model/aluno/aluno';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  imports: [AcompanhamentoFormulario, AcompanhamentoTabela],
  selector: 'app-acompanhamento-page',
  styleUrl: './acompanhamento-page.css',
  templateUrl: './acompanhamento-page.html',
})
export class AcompanhamentoPage implements OnInit {

  // Vetor contendo os dados dos alunos
  vetorAlunos = signal<Aluno[]>([]);

  // Vetor contendo os dados dos acompanhamentos
  vetorAcompanhamentos = signal<Acompanhamento[]>([]);

  // FormulÃ¡rio reativo
  formulario = new FormGroup({
    data: new FormControl(new Date().toISOString().split('T')[0]),
    texto: new FormControl(''),
    codigoAluno: new FormControl('')
  });

  // Construtor
  constructor(private servico: AcompanhamentoServico){}

  // Executa ao carregar o componente
  ngOnInit() {
    this.servico.listarAlunos()
    .subscribe(res => this.vetorAlunos.set(res));

    this.servico.listarAcompanhamentos()
    .subscribe(res => this.vetorAcompanhamentos.set(res));
  }

  // Cadastrar acompanhamento
  cadastrar() {
    this.servico.cadastrar(this.formulario.value as any).subscribe(novo => {
        this.vetorAcompanhamentos.update(lista => [...lista, novo]);
        this.formulario.reset({ data: new Date().toISOString().split('T')[0], texto: '', codigoAluno: '' });
    });
  }

  // Remover acompanhamento
  remover(codigo: string) {
    this.servico.remover(codigo).subscribe(() => {
        this.vetorAcompanhamentos.update(lista => lista.filter(a => a.codigo !== codigo));
    });
  }

}
