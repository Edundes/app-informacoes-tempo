import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export interface PrevisaoClima {
  temperatura: number;
  condicao: string;
  sensacaoTermica: number;
  umidade: number;
}

interface ApiResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class ServicoClimaService {
  previsaoClima(previsaoClima: any) {
    throw new Error('Method not implemented.');
  }
  cidade: string = '';
  apiKey: string = '1dd0a6555a320942db378261b6ac18f2';

  constructor(private http: HttpClient) { }
  setCidade(cidade : string) {
    this.cidade = cidade;
  }


  getPrevisaoClima(): Observable<PrevisaoClima> {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${this.cidade}&units=metric&appid=${this.apiKey}&lang=pt_br`;

    return this.http.get<ApiResponse>(urlApi).pipe(
      map(response => {
        return {
          temperatura: response.main.temp,
          condicao: response.weather[0].description,
          sensacaoTermica: response.main.feels_like,
          umidade: response.main.humidity
        };
      })
    );
  }


}
