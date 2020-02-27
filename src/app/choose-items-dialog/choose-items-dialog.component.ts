import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-choose-items-dialog',
  templateUrl: './choose-items-dialog.component.html',
  styleUrls: ['./choose-items-dialog.component.css']
})
export class ChooseItemsDialogComponent implements OnInit {
  
  constructor( public dialogRef: MatDialogRef<ChooseItemsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    cartItemsCount:number;
    breads:string[];
  ngOnInit(): void {
    console.log(this.data.head);
    this.breads=this.data.Breads;
    this.cartItemsCount=this.data.cartItemsCount;
  }
  addCartItem():void{
    this.cartItemsCount=this.cartItemsCount+1;

  }
  removeCartItem():void{
    if(this.cartItemsCount>0){
      this.cartItemsCount=this.cartItemsCount-1;
    }
  }
}

