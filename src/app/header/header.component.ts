import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import { Header } from '../header';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header:Header;
  headerColor:string="origional";
  constructor(private headerService:HeaderServiceService) { }

  ngOnInit(): void {
    console.log(this.headerService.getHeader().subscribe(data=>this.header=data));
    
  }
  @HostListener('window:scroll', ['$event'])

onWindowScroll(e) {
  const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (number > 10) {
     this.headerColor="bg-dark"
  } else {
    
  this.headerColor="origional";
  }
  }
}
