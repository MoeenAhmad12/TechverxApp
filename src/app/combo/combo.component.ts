import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
  footLong = [
    {
      title: 'Itallian B.M.T 12',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu1.jpg'
    },
    {
      title: 'Bar B Q Chicken 12',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu2.jpg'
    },
    {
      title: 'Veggie Delight 12',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu3.jpg'
    },
    {
      title: 'Itallian B.M.T 12',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu4.jpg'
    },
    {
      title: 'Veggie Delight 12',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu5.jpg'
    },
    {
      title: 'Bar B Q Chicken 12',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu1.jpg'
    },
    {
      title: 'Itallian B.M.T 12',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu5.jpg'
    },
    {
      title: 'Bar B Q Chicken 12',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu1.jpg'
    },
    {
      title: 'Veggie Delight 12',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu3.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
