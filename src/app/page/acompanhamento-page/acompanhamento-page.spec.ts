import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcompanhamentoPage } from './acompanhamento-page';

describe('AcompanhamentoPage', () => {
  let component: AcompanhamentoPage;
  let fixture: ComponentFixture<AcompanhamentoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanhamentoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AcompanhamentoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
