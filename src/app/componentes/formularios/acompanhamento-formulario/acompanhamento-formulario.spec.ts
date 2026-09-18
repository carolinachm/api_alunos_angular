import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcompanhamentoFormulario } from './acompanhamento-formulario';

describe('AcompanhamentoFormulario', () => {
  let component: AcompanhamentoFormulario;
  let fixture: ComponentFixture<AcompanhamentoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanhamentoFormulario],
    }).compileComponents();

    fixture = TestBed.createComponent(AcompanhamentoFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
