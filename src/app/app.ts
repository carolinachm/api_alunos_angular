import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navegacao } from './componentes/navegacao/navegacao';

@Component({
  imports: [ RouterOutlet, Navegacao],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('api_aluno_angular');
}
