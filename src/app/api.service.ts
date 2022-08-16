import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //readonly apiUrl = "http://localhost:23651/api";
  readonly apiUrl = "https://dynamicsentencewebapi.azurewebsites.net/api";
  readonly options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) {}

  getWordTypeList(): Observable < any[] > {
    return this.http.get < any > (this.apiUrl + '/WordTypes');
  }

  getWordsList(wordType: any): Observable < any[] > {
    return this.http.get < any > (this.apiUrl + '/WordUnits/' + wordType);
  }

  postSentene(sentence: any): Observable < any[] > {
    return this.http.post < any > (this.apiUrl + '/Sentences/', JSON.stringify(sentence), this.options);
  }
}
