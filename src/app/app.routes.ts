import { Routes } from '@angular/router';
import { AlunoPage } from './page/aluno-page/aluno-page';
import { AcompanhamentoPage } from './page/acompanhamento-page/acompanhamento-page';

export const routes: Routes = [
    {
        path:'aluno', component:AlunoPage
    },
    {
        path:'acompanhamento', component:AcompanhamentoPage
    },
    {
        path: '', redirectTo:'aluno', pathMatch:'full'
    }
];
