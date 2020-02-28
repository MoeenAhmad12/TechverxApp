import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import {FootLong} from '../footLong';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  footLong :FootLong;
 
  constructor(private footLongService:HeaderServiceService) { }

  ngOnInit(): void {
    
    this.footLongService.getFootLong().subscribe(data=>this.footLong=data);
  }
}
