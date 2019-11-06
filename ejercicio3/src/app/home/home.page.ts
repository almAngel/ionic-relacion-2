import { Component, OnInit } from '@angular/core';
import { ProductloaderService } from '../services/productloader.service';
import { ProductComponent } from '../components/product/product.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products: ProductComponent[];
  public total: number = 0;

  constructor(
    private productLoader: ProductloaderService
  ) { }

  async ngOnInit() {
    this.products = await this.productLoader.loadFile() as ProductComponent[];
    
    this.products.forEach(e => {
      this.total += (e.quantity * e.price);
    });
  }

}
