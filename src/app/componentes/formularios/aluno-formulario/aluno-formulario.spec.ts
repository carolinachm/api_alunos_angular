import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunoFormulario } from './aluno-formulario';

describe('AlunoFormulario', () => {
  let component: AlunoFormulario;
  let fixture: ComponentFixture<AlunoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoFormulario],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
