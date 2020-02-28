import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import {FootLong} from '../footLong';
@Component({
  selector: 'app-six-inch',
  templateUrl: './six-inch.component.html',
  styleUrls: ['./six-inch.component.css']
})
export class SixInchComponent implements OnInit {
  footLong :FootLong;
 
  constructor(private footLongService:HeaderServiceService) { }

  ngOnInit(): void {
    
    this.footLongService.getFootLong().subscribe(data=>this.footLong=data);
  }
}
