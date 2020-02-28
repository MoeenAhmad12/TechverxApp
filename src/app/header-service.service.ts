import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Header } from './header';
import { Observable } from 'rxjs';
import { Footer } from './footer';
import { Category } from './category';
import {FootLong} from './footLong'
import { Slider } from './slider';
@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  private headerUrl="/assets/data/header.json";
  private footerUrl="/assets/data/footer.json";
  private categoriesUrl="/assets/data/categories.json";
  private footLongUrl="/assets/data/footLong.json";
  private sliderUrl="/assets/data/slider.json";
  constructor(private http:HttpClient) { }

  getHeader():Observable<Header>{
    return this.http.get<Header>(this.headerUrl);
  }
  getFooter():Observable<Footer>{
    return this.http.get<Footer>(this.footerUrl);
  }
  getCategories():Observable<Category>{
    return this.http.get<Category>(this.categoriesUrl);
  }
  getFootLong():Observable<FootLong>{
    return this.http.get<FootLong>(this.footLongUrl);
  }
  getSlider():Observable<Slider>{
    return this.http.get<Slider>(this.sliderUrl);
  }
}
