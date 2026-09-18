import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunoPage } from './aluno-page';

describe('AlunoPage', () => {
  let component: AlunoPage;
  let fixture: ComponentFixture<AlunoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
