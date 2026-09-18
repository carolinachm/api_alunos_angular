import { Component, OnInit, signal } from '@angular/core';
import { AlunoService } from '../../service/aluno/aluno-service';
import { Aluno } from '../../model/aluno/aluno';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlunoFormulario } from '../../componentes/formularios/aluno-formulario/aluno-formulario';
import { AlunoTabela } from '../../componentes/tabelas/aluno-tabela/aluno-tabela';
@Component({
  imports: [ReactiveFormsModule, AlunoFormulario, AlunoTabela],
  selector: 'app-principal',
  styleUrl: './aluno-page.css',
  templateUrl: './aluno-page.html',
})
export class AlunoPage implements OnInit {
  //vibilidade dos botoes
  btnCadastrar = signal(true);
  //vetor do tipo aluno
  vetorAlunos = signal<Aluno[]>([]);
  //Formulario  reativo para cadastro de aluno
  formulario = new FormGroup({
    codigo: new FormControl(''),
    nome: new FormControl(''),
    nota1: new FormControl<number | null>(null),
    nota2: new FormControl<number | null>(null)
  });
  //Contrutor
  constructor(private service: AlunoService) { }
  //Metodo que é chamado quando o componente é inicializado carrega a lista de alunos
  ngOnInit(): void {
    console.log(' Componente iniciado');
    this.listar();
  }
  //lista todos os alunos cadastrados
  listar(): void {
    this.service.listar().subscribe(retorno => this.vetorAlunos.set(retorno));
  }
  //Metodo para selecionar um aluno para edição, preenche o formulário com os dados do aluno selecionado e altera a visibilidade dos botões
  selecionarAluno(indice: number): void {
    this.formulario.patchValue(this.vetorAlunos()[indice]);
    this.btnCadastrar.set(false);
  }
  //Método para cancelar as açoes das alterações, limpa o formulário e altera a visibilidade dos botões
  cancelar(): void {
    this.formulario.reset();
    this.btnCadastrar.set(true);
  }
  //Método para cadastrar um novo aluno, envia os dados do formulário para o serviço e atualiza a lista de alunos
  cadastrar(): void{
     if (this.formulario.invalid) return;
    this.service.cadastrar(this.formulario.value as Aluno)
    .subscribe(aluno =>{
      this.vetorAlunos.update(alunos => [...alunos, aluno]);
      this.formulario.reset();
      this.btnCadastrar.set(true);
    })
  }
   //Método para atualizar
  atualizar():void{
    const codigo = this.formulario.get('codigo')?.value;
    if (!codigo) return;
    this.service.atualizar(codigo, this.formulario.value as Aluno)
    .subscribe(alunoAtualizado => {
      this.vetorAlunos.update(alunos => 
        alunos.map(aluno => aluno.codigo === alunoAtualizado.codigo ? alunoAtualizado : aluno)
      );
      this.cancelar();
    });
  }
  //Método para Remover
  remover(): void{
    const codigo = this.formulario.value.codigo;

    this.service.excluir(codigo!)
    .subscribe(()=> {
      this.vetorAlunos.update(alunos => alunos.filter( aluno => aluno.codigo !== codigo))
      this.cancelar()
    });
  }
 
}