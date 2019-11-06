import { Component, OnInit } from '@angular/core';
import { ProductloaderService } from '../services/productloader.service';
import { ProductComponent } from '../components/product/product.component';
import { AddPage } from '../add/add.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products: ProductComponent[];

  constructor(
    private productLoader: ProductloaderService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.productLoader.init();
  }

  addPage() {
    this.router.navigate(['/add']);
  }

}
