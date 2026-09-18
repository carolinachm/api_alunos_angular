import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../../model/aluno/aluno';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlunoService {
    // URL base — igual ao @RequestMapping do Controller
    private readonly API = 'http://localhost:8080/api/alunos';

    constructor(private http: HttpClient) { }

    // Listar todos — rota raiz GET /api/alunos
    listar(): Observable<Aluno[]> {
        console.log('Buscando:', this.API);
        return this.http.get<Aluno[]>(this.API);
    }

    //  Cadastrar — POST /api/alunos
    cadastrar(aluno: Aluno): Observable<Aluno> {
        console.log(' Cadastrando aluno:', aluno);
        return this.http.post<Aluno>(this.API, aluno);
    }

    //  Buscar por ID — GET /api/alunos/{codigo}
    buscarPorCodigo(codigo: string): Observable<Aluno> {
        console.log(' Buscando aluno com código:', codigo);
        return this.http.get<Aluno>(`${this.API}/${codigo}`);
    }

    //  Atualizar — PUT /api/alunos/{codigo}
    atualizar(codigo: string, aluno: Aluno): Observable<Aluno> {
        console.log(' Atualizando aluno:', codigo, aluno);
        return this.http.put<Aluno>(`${this.API}/${codigo}`, aluno);
    }

    //  Excluir — DELETE /api/alunos/{codigo}
    excluir(codigo: string): Observable<void> {
        console.log(' Excluindo aluno com código:', codigo);
        return this.http.delete<void>(`${this.API}/${codigo}`);
    }

    //  Contar — GET /api/alunos/contar
    contarAlunos(): Observable<number> {
        return this.http.get<number>(`${this.API}/contar`);
    }

    // Calcular média pela API — GET /api/alunos/{codigo}/media
    calcularMediaApi(codigo: string): Observable<number> {
        return this.http.get<number>(`${this.API}/${codigo}/media`);
    }

    //  Verificar aprovação pela API — GET /api/alunos/{codigo}/aprovado
    verificarAprovacaoApi(codigo: string): Observable<boolean> {
        return this.http.get<boolean>(`${this.API}/${codigo}/aprovado`);
    }

    //  Listar aprovados — GET /api/alunos/aprovados
    listarAprovados(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(`${this.API}/aprovados`);
    }

    // Cálculos locais (mantidos para uso rápido no frontend)
    calcularMedia(nota1: number, nota2: number): number {
        return (nota1 + nota2) / 2;
    }

    verificarAprovacao(media: number): string {
        return media >= 6 ? 'Aprovado' : 'Reprovado';
    }
}