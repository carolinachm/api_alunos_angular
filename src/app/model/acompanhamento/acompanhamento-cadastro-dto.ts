import { Acompanhamento } from "./acompanhamento";

export interface AcompanhamentoCadastroDTO extends Omit<Acompanhamento, 'codigo' | 'aluno'>{
    codigoAluno:string;
}