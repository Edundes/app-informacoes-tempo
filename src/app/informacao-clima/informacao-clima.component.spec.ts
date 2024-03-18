import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { InformacaoClimaComponent } from './informacao-clima.component';
import {ServicoClimaService} from "../servico-clima.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";

describe('InformacaoClimaComponent', () => {
  let component: InformacaoClimaComponent;
  let fixture: ComponentFixture<InformacaoClimaComponent>;
  let servicoClimaService: ServicoClimaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ InformacaoClimaComponent ],
      providers: [
        { provide: ServicoClimaService, useValue: {
            getPrevisaoClima: jasmine.createSpy('getPrevisaoClima').and.returnValue(of({ cidade: 'Goiânia' }))
          }}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacaoClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the city name', fakeAsync(() => {
    component.cidadeInformada = 'Goiânia';
    fixture.detectChanges();
    tick();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Goiânia');
  }));
});
