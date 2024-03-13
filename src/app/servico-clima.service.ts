import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServicoClimaService {

  constructor(private http: HttpClient) { }

  getPrevisaoClima(lat: number, lon: number, part: string, apiKey: string) {

    const urlApi = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';

    return this.http.get(urlApi);
  }
}
