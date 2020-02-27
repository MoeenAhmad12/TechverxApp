import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-list',
  templateUrl: './quick-list.component.html',
  styleUrls: ['./quick-list.component.css']
})
export class QuickListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  QuickList(){
    console.log("Moeen AHmad");
  }

}
