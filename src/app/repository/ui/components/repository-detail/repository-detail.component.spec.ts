import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryDetailComponent } from './repository-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

describe('RepositoryDetailComponent', () => {
  let component: RepositoryDetailComponent;
  let fixture: ComponentFixture<RepositoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryDetailComponent],
      imports: [CommonModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryDetailComponent);
    component = fixture.componentInstance;

    component.repo = {
      id: 1,
      name: 'Test Repo',
      description: 'Description test',
      stargazers_count: 10,
      language: 'TypeScript',
    } as any;

    fixture.detectChanges(); 
  });

  test('Debe crear el componente de detalle del repositorio', () => {
    expect(component).toBeTruthy();
  });

  test('Debe tener un botón o link para volver (Back)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Back');
  });
});
