import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Respon} from "./response";
import {Req} from "./request";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly baseUrl = `http://localhost:8080/app-controller`;

  constructor(private httpClient: HttpClient) {
  }

  approxRequest(req: Req ){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .post<Respon>(`${this.baseUrl}`, JSON.stringify(req), { headers });
  }
}
