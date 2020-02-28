import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import {FootLong} from '../footLong';
@Component({
  selector: 'app-platter',
  templateUrl: './platter.component.html',
  styleUrls: ['./platter.component.css']
})
export class PlatterComponent implements OnInit {
  footLong :FootLong;
 
  constructor(private footLongService:HeaderServiceService) { }

  ngOnInit(): void {
    
    this.footLongService.getFootLong().subscribe(data=>this.footLong=data);
  }

}
