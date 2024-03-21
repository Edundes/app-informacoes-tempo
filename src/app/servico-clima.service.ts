import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServicoClimaService {
  private apiKey = '1dd0a6555a320942db378261b6ac18f2';
  constructor(private http: HttpClient) { }
  getPrevisaoClima(city: string): Observable<any> {
    console.log("Buscando previsão do clima para: ", city);
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`;
    return this.http.get(urlApi);
  }
}
