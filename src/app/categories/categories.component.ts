import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  footLong = [
    {
      title: 'Foot Long',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'footlong',
      img: 'assets/Images/FootLong.jpg'
    },
    {
      title: '6 Inch',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'sixinch',
      img: 'assets/Images/6Inch.jpg'
    },
    {
      title: 'Salad',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'salad',
      img: 'assets/Images/Salad.jpg'
    },
    {
      title: 'Platter',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'platter',
      img: 'assets/Images/Platter.jpg'
    },
    {
      title: 'Deals',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'deals',
      img: 'assets/Images/Deals.jpg'
    },
    {
      title: 'Combo',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'combo',
      img: 'assets/Images/TodaysMenu1.jpg'
    },
    {
      title: 'Add On',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'addon',
      img: 'assets/Images/TodaysMenu5.jpg'
    },
    {
      title: 'Drinks',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'drinks',
      img: 'assets/Images/TodaysMenu1.jpg'
    },
    {
      title: 'Mics',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'mics',
      img: 'assets/Images/TodaysMenu3.jpg'
    },
    {
      title: 'Toastes',
      description: 'Piled with shripso, calama, calms, mussles, surimi.',
      link: 'toastes',
      img: 'assets/Images/TodaysMenu3.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
