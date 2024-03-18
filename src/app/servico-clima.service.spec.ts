import { TestBed } from '@angular/core/testing';

import { ServicoClimaService } from './servico-clima.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ServicoClimaService', () => {
  let service: ServicoClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicoClimaService]
    });
    service = TestBed.inject(ServicoClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
