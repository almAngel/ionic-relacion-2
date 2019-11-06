import { Component, OnInit } from '@angular/core';
import { ProductloaderService } from '../services/productloader.service';
import { ProductComponent } from '../components/product/product.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  product: ProductComponent = {
    name: undefined,
    price: undefined,
    quantity: undefined
  };

  constructor(
    private productLoader: ProductloaderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  add() {
    this.productLoader.addProduct(this.product);
    this.router.navigate(["/home"]);
  }
}
