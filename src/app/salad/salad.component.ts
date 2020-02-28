import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import {FootLong} from '../footLong';
@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.css']
})
export class SaladComponent implements OnInit {
  footLong :FootLong;
 
  constructor(private footLongService:HeaderServiceService) { }

  ngOnInit(): void {
    
    this.footLongService.getFootLong().subscribe(data=>this.footLong=data);
  }

}
