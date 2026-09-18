import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcompanhamentoTabela } from './acompanhamento-tabela';

describe('AcompanhamentoTabela', () => {
  let component: AcompanhamentoTabela;
  let fixture: ComponentFixture<AcompanhamentoTabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanhamentoTabela],
    }).compileComponents();

    fixture = TestBed.createComponent(AcompanhamentoTabela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
