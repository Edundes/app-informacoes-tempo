import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

export interface PrevisaoClima {
  temperatura: number;
  condicao: string;
  sensaçãoTermica: number;
  umidade :number
}

@Injectable({
  providedIn: 'root'
})

export class ServicoClimaService {

  constructor(private http: HttpClient) { }

  getPrevisaoClima(city: string, apiKey: string): Observable<PrevisaoClima> {

    const urlApi = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}&lang=pt_br';

    return this.http.get<PrevisaoClima>(urlApi);
  }
}

// 1dd0a6555a320942db378261b6ac18f2
// https://api.openweathermap.org/data/2.5/weather?q=${goiania}&units=metric&appid=${1dd0a6555a320942db378261b6ac18f2}&lang=pt_br
// https://api.openweathermap.org/data/2.5/weather?q=goiania&units=metric&appid=1dd0a6555a320942db378261b6ac18f2&lang=pt_br
