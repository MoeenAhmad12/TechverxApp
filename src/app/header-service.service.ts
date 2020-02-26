import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Header } from './header';
import { Observable } from 'rxjs';
import { Footer } from './footer';
@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  private headerUrl="/assets/data/header.json";
  private footerUrl="/assets/data/footer.json";
  constructor(private http:HttpClient) { }

  getHeader():Observable<Header>{
    return this.http.get<Header>(this.headerUrl);
  }
  getFooter():Observable<Footer>{
    return this.http.get<Footer>(this.footerUrl);
  }
}
