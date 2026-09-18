import{ Aluno } from "../aluno/aluno"

export interface Acompanhamento{
    codigo: string;
    texto: string;
    data:string;
    aluno: Aluno;
}