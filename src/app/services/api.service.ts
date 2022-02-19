import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  private apiPrefix = 'api';
  constructor(private http: HttpClient){}

  executeGet(url: string, params?: any): Observable<any> {
    return this.http.get(this.getUrl(url), { params })
  }

  executePost(url: string, params?: any): Observable<any> {
    return this.http.post(this.getUrl(url), params);
  }

  private getUrl(url: string): string {
    return `${this.apiPrefix}/${url}`;
  }
}