import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginComponent } from "../login/login.component";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, data: any[]) {
    return this.http.post(url, data);
  }

  put(url: string, data: any[]) {
    return this.http.put(url, data);
  }

  delete(url: string) {
    return this.http.delete(url)
  }
}
