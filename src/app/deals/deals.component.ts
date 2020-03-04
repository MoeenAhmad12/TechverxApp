import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import {FootLong} from '../footLong';
import { DialogResult } from '../dialogResult';
import { MatDialog } from '@angular/material/dialog';
import { ChooseItemsDialogComponent } from '../choose-items-dialog/choose-items-dialog.component';
import { ItemsCountService } from '../items-count.service';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  footLong :FootLong;
 

  result:DialogResult;
  constructor(private cartItemCountService:ItemsCountService,public dialog: MatDialog,private footLongService:HeaderServiceService) { }

  ngOnInit(): void {
    
    this.footLongService.getFootLong().subscribe(data=>this.footLong=data);
  }
  openDialog(item:any) {
    let dialogRef=this.dialog.open(ChooseItemsDialogComponent, {
      width: '70%',
    
      data: {
        "cartItemsCount":1,
        "itemImage":item.img,
        "head":item.title,
        "Breads":["Wheat Spesica","Honay Oet","Wheat","Italian","Parmesan Oregano"],
        "Veggis":["Lettuce","Tomato","Pickles","Jalpeno","Onion","Olives"],
        "Sauces":["South West Chalpeot","Thousand Iceland","BBQ Sauce","Musterd Sauce","Chilli Sauce","Olive Oil","Honey Mustard"],
        "Cheese":["With Cheese","Without Cheese"]
      }
    });
    dialogRef.afterClosed().subscribe(value => {
      this.result=value;
      this.cartItemCountService.updatedItemCount(1);
    });
    
  }
  
}
