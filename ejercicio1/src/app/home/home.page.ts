import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    private min: number;
    private max: number;
    private rand: number;

    constructor() { }

    gen() {
        this.rand = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

    changeValueOnClick() {
        
        if (this.rand != this.min) {
            this.rand = this.min;
        } else {
            this.rand = this.max;
        }
    }
}
