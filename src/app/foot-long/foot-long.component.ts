import { Component, OnInit } from '@angular/core';
import {FootLong} from '../footLong'
import { HeaderServiceService } from '../header-service.service';
@Component({
  selector: 'app-foot-long',
  templateUrl: './foot-long.component.html',
  styleUrls: ['./foot-long.component.css']
})
export class FootLongComponent implements OnInit {
  
  footLong :FootLong;
 
  constructor(private footLongService:HeaderServiceService) { }

  ngOnInit(): void {
    
    this.footLongService.getFootLong().subscribe(data=>this.footLong=data);
  }

}
