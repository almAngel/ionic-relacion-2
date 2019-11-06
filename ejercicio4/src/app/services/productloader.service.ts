import { HttpClient } from '@angular/common/http'
import { Injectable, OnInit } from '@angular/core';
import { ProductComponent } from '../components/product/product.component';

@Injectable({
    providedIn: 'root'
})
export class ProductloaderService {

    filePath: any = "assets/mocks/cart.json";
    public productList: ProductComponent[] = [];

    constructor(private httpClient: HttpClient) { }

    async init() {
        this.productList = await this.loadFile();
    }

    async loadFile(): Promise<any> {
        let result: Promise<any>;

        result = new Promise((resolve, reject) => {
            this.httpClient.get(this.filePath, { responseType: 'json' }).subscribe((data) => {
                resolve(data);
            });
        });

        return result;
    }

    addProduct(product: ProductComponent) {
        this.productList.push(product);
    }

    recalculateTotal(): number {
        let total = 0;
        this.productList.forEach(e => {
            total += (e.quantity * e.price);
        });
        return total;
    }
}
