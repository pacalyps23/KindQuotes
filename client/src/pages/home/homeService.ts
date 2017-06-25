
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

  postQuote(quote: any) : Observable<any> {
    console.log(quote.id);
    
    console.log(quote.message);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post("http://localhost:8080/quotes/", JSON.stringify(quote), { headers: headers });


  }

  deleteQuote(quote: any) : Observable<any> {
    return this._http.delete("http://localhost:8080/quotes/" + quote.id);
  }

  updateQuote(quote: any) : Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put("http://localhost:8080/quotes/" + quote.id, JSON.stringify(quote), {headers: headers});

  }
}
