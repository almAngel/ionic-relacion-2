import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    private inches: number = 1;
    private centimeters: number = 1;
    private meters: number = 1;
    private focus: string;

    constructor() { }

    ngOnInit() {
    }

    focusInches() {
        this.focus = "in";
    }

    focusCentimeters() {
        this.focus = "cm";
    }

    focusMeters() {
        this.focus = "m";
    }

    convert() {
        switch (this.focus) {
            case "in":
                this.centimeters = this.inches * 2.54;
                this.meters = this.inches * 0.0254;
                break;
            case "cm":
                this.inches = this.centimeters / 2.54;
                this.meters = this.inches * 0.0254;
                break;
            case "m":
                this.inches = this.meters / 0.0254;
                this.centimeters = this.inches * 2.54;
                break;
        }
    }
    
}
