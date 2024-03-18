import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacaoClimaComponent } from './informacao-clima.component';
import {ServicoClimaService} from "../servico-clima.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('InformacaoClimaComponent', () => {
  let component: InformacaoClimaComponent;
  let fixture: ComponentFixture<InformacaoClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicoClimaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacaoClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the city name', () => {
    component.cidadeInformada = 'Goiânia';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Goiânia');
  });
});
