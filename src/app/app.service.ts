import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Respon} from "./response";
import {Req} from "./request";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly baseUrl = `http://localhost:8080/app-controller`;
  dataUser = ['Zero zero one one one zero zero one one\nCryin\' zeros and I\'m\nZero zero one one one zero zero one one\nCryin\' zeros and I\'m'];

  constructor(private httpClient: HttpClient) {
  }

  approxRequest(req: Req ){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .post<Respon>(`${this.baseUrl}`, JSON.stringify(req), { headers });
  }
  getStringRes(respon:Respon):string[]{
    let res =[];
    res.push("линейная: "+respon.linear[4])
    res.push("полиномиальная 2-й степени: "+respon.square[5])
    res.push("полиномиальная 3-й степени: "+respon.third[6])
    res.push("экспоненциальная: "+respon.exponent[4])
    res.push("степенная: "+respon.power[4])
    res.push("логарифмическая: "+respon.logarithmic[4])

    return res;
  }


}
