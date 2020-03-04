import { Component, OnInit ,HostListener } from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig , MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogResult} from '../dialogResult';
import { ChooseItemsDialogComponent } from '../choose-items-dialog/choose-items-dialog.component';
import { HeaderServiceService } from '../header-service.service';
import { TodaysMenu } from '../todaysmenu';
import { ItemsCountService } from '../items-count.service';
@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  styleUrls: ['./todays-menu.component.css']
})
export class TodaysMenuComponent implements OnInit {
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';
  result:DialogResult;
  constructor(private cartItemCountService:ItemsCountService,public dialog: MatDialog,private cartService:HeaderServiceService) { 
    this.setCard();
    }
    setCard(){
      this.cartService.getTodaysMenuList().subscribe(data=>this.card=data)
    }
    card:TodaysMenu[]
  cards = [
    {
      title: 'Card Title 1',
      description: 'Itallian B.M.T 12',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu1.jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Bar B Q Chicken 12',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu2.jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Veggie Delight 12',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu3.jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Itallian B.M.T 12',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu4.jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Veggie Delight 12',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu5.jpg'
    },
    {
      title: 'Card Title 6',
      description: 'Bar B Q Chicken 12',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu1.jpg'
    },
    {
      title: 'Card Title 7',
      description: 'Itallian B.M.T 12',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu5.jpg'
    },
    {
      title: 'Card Title 8',
      description: 'Bar B Q Chicken 12',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu1.jpg'
    },
    {
      title: 'Card Title 9',
      description: 'Veggie Delight 12',
      buttonText: 'Add To Cart',
      img: 'assets/Images/TodaysMenu3.jpg'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }
  openDialog(item:any) {
    let dialogRef=this.dialog.open(ChooseItemsDialogComponent, {
      width: '70%',
    
      data: {
        "cartItemsCount":1,
        "itemImage":item.img,
        "head":item.description,
        "Breads":["Wheat Spesica","Honay Oet","Wheat","Italian","Parmesan Oregano"],
        "Veggis":["Lettuce","Tomato","Pickles","Jalpeno","Onion","Olives"],
        "Sauces":["South West Chalpeot","Thousand Iceland","BBQ Sauce","Musterd Sauce","Chilli Sauce","Olive Oil","Honey Mustard"],
        "Cheese":["With Cheese","Without Cheese"]
      }
    });
    dialogRef.afterClosed().subscribe(value => {
      this.result=value;
      this.cartService.addItemToCart(this.result);
      this.cartItemCountService.updatedItemCount(1);
    });
    
  }
  
  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }
}
