import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunoTabela } from './aluno-tabela';

describe('AlunoTabela', () => {
  let component: AlunoTabela;
  let fixture: ComponentFixture<AlunoTabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoTabela],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoTabela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
