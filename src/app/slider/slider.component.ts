import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {  
  sliderItems:string[]=["assets/Images/Slider1.png","assets/Images/Slider2.png"];
  constructor() { }

  ngOnInit(): void {
  }

}
