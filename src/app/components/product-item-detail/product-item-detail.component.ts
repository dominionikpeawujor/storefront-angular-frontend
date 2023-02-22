import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductItemService } from 'src/app/services/product-item.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  productToShow: Product[] = [];

  constructor(private productItemService: ProductItemService) {  }

  ngOnInit(): void {
    this.productToShow = this.productItemService.showDetails();
    console.log(this.productItemService)
  }
  
  clearDetail(){
    this.productItemService.clearDetail();
    this.productToShow = [];
  }
}
