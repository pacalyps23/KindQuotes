import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {
  constructor(private _http: Http) {

  }

  getAllQuotes(): Observable<any> {
    return this._http.get("http://localhost:8080/quotes/")
      .map(response => response.json());
  }

  postQuote(quote: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this._http.post("http://localhost:8080/quotes/", JSON.stringify(quote), { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });
  }

  deleteQuote(quote: any) {
    console.log(quote.id);
    console.log(quote);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this._http.delete("http://localhost:8080/quotes/" + quote.id, JSON.stringify(quote));

  }
}
