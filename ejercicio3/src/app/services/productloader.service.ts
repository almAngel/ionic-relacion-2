import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductloaderService {

    filePath: any = "assets/mocks/cart.json";

    constructor(private httpClient: HttpClient) { }

    async loadFile(): Promise<any> {
        let result: Promise<any>;

        result = new Promise((resolve, reject) => {
            this.httpClient.get(this.filePath, { responseType: 'json' }).subscribe((data) => {
                resolve(data);
            });
        });
        
        return result;
    }
}
