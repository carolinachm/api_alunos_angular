// ImportaÃ§Ãµes
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acompanhamento } from '../../model/acompanhamento/acompanhamento';
import { Aluno } from '../../model/aluno/aluno';
import { AcompanhamentoCadastroDTO } from '../../model/acompanhamento/acompanhamento-cadastro-dto';

// Injectable
@Injectable({
  providedIn: 'root',
})

// Classe
export class AcompanhamentoServico {
  
  // URLs
  private readonly API_ACOMPANHAMENTO = 'http://localhost:8080/api/acompanhamentos';
  private readonly API_ALUNOS = 'http://localhost:8080/api/alunos';

  // Construtor
  constructor(private http: HttpClient) { }

  // Listar todos os acompanhamentos registrados
  listarAcompanhamentos(): Observable<Acompanhamento[]> {
    return this.http.get<Acompanhamento[]>(`${this.API_ACOMPANHAMENTO}/listar`);
  }

  // Listar os alunos no <select> do formulÃ¡rio
  listarAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.API_ALUNOS}/listar`);
  }

  // Cadastrar
  cadastrar(dto: AcompanhamentoCadastroDTO): Observable<Acompanhamento> {
    return this.http.post<Acompanhamento>(`${this.API_ACOMPANHAMENTO}/cadastrar`, dto);
  }

  // Remover
  remover(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.API_ACOMPANHAMENTO}/remover/${codigo}`);
  }

}